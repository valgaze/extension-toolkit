import { z } from "zod";

/**
 * Helper that normalizes Voiceflow's input quirks to make them work with Zod schemas
 *
 * 🔧 What this does:
 * 1. Converts "0" strings to undefined (Voiceflow sends empty variables as "0")
 * 2. Converts string numbers to actual numbers (Voiceflow sends all numbers as strings)
 *
 * Example usage:
 * ```ts
 * const myInputs = z.object({
 *   name: z.string(),
 *   age: z.number(),
 * });
 *
 * const schema = normalizeVoiceflowInput(myInputs);
 * 
 * const parsed = schema.parse(input);
 * console.log(parsed);
 * 
 * ```
 * 
 * Without using this fix, this is what would be involved to correctly parse inputs to functions
 * 
 * ```ts
 * export const inputSchema = z.object({
 *   text: z
 *     .string()
 *     .min(2, "Text cannot be empty")
 *     .refine((val) => val !== "0", {
 *       message: `Note: The value was "0" which probably means an empty variable from the canvas was provided to the function)`,
 *     }),
 *   userId: z
 *     .union([z.number(), z.string()])
   .transform((val) => {
      if (typeof val === "number") return val; // Already a number, return as is
      const parsed = Number(val);
      if (!Number.isFinite(parsed))
 *         throw new Error("userId must be a valid number");
 *       return parsed;
 *     })
 *     .optional(),
 * });
 * ```
 * 
 * NOTE: voiceflow also will stringify booleans to "true" or "false", you could extend the below to handle that
 * case if necessary for your system
 *
 */
export const normalizeVoiceflowInput = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((input) => {
    if (typeof input === "object" && input !== null) {
      const fixedInput: Record<string, unknown> = {};

      for (const [key, value] of Object.entries(input)) {
        if (value === "0" || value === "") {
          fixedInput[key] = undefined; // Treat "0" as empty per Voiceflow's input handling
        } else if (typeof value === "string" && !isNaN(Number(value))) {
          // Function inputs, even if they're numbers on the canvas, are strings when they reach args.inputVars
          fixedInput[key] = Number(value); // Convert numeric strings
        } else {
          fixedInput[key] = value;
        }
      }

      return fixedInput;
    }
    return input;
  }, schema);

// Base types for function arguments and responses
export interface VoiceflowArgs<TInput> {
  inputVars: TInput;
}

export type TraceType = "text" | "speak" | "debug";

interface NextOneCommand {
  path: string;
}

interface MongoQueryObject {
  field: string;
  value: string;
  operator: string;
}

interface NextManyCommand {
  listen: boolean;
  defaultTo: string;
  to: Array<{
    on: MongoQueryObject;
    dest: string;
  }>;
}

// Trick to help avoid common typo of placing outputVars in the next object
type StrictNext =
  | (NextOneCommand & { outputVars?: never })
  | (NextManyCommand & { outputVars?: never });

export interface VoiceflowResponse<TOutput> {
  outputVars?: TOutput;
  next?: StrictNext;
  trace?: Array<{
    type: TraceType;
    payload: {
      message: string;
    };
  }>;
}

// Type helper for creating Voiceflow functions
export type VoiceflowFunction<TInput, TOutput> = (
  args: VoiceflowArgs<TInput>
) => Promise<VoiceflowResponse<TOutput>>;
