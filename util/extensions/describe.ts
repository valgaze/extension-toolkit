import { z } from "zod/v4";
import type { ZodType } from "zod/v4";
import { META_KEY } from "./index";
import type {
  ExtensionMeta,
  EffectExtensionMeta,
  RenderExtension,
  EffectsExtension,
} from "./types";

const getExtensionMeta = <
  T extends ExtensionMeta | EffectExtensionMeta<ZodType>
>(
  ext: RenderExtension | EffectsExtension
): T => {
  const meta =
    "render" in ext
      ? (ext.render as any)[META_KEY]
      : (ext.effect as any)[META_KEY];
  return meta as T;
};

type ExtensionDescription = {
  name: string;
  llmDescription: string;
  inputs: Record<string, any>;
  outputs?: Record<string, any>;
};

export const describeExtension = (
  ext: RenderExtension | EffectsExtension
): ExtensionDescription => {
  const meta =
    "render" in ext
      ? getExtensionMeta<ExtensionMeta>(ext)
      : getExtensionMeta<EffectExtensionMeta<ZodType>>(ext);

  return {
    name: meta.name || meta.id,
    llmDescription: meta.llmDescription,
    inputs: z.toJSONSchema(meta.inputs),
    outputs: meta.outputs ? z.toJSONSchema(meta.outputs) : undefined,
  };
};

export const describeExtensions = (
  exts: Array<RenderExtension | EffectsExtension>
): ExtensionDescription[] => {
  return exts.map((ext) => describeExtension(ext));
};

const formatExtensionDescription = (desc: ExtensionDescription): string => {
  const parts = [
    desc.name,
    `Description: ${desc.llmDescription}`,
    `Inputs: ${JSON.stringify(desc.inputs, null, 2)}`,
  ];

  if (desc.outputs) {
    parts.push(`Outputs: ${JSON.stringify(desc.outputs, null, 2)}`);
  }

  return parts.join("\n\n");
};

/**
 * Generates a prompt for a single extension that can be used with an LLM.
 * @param ext The extension to generate a prompt for.
 * @returns A string representing the extension's tool definition.
 */
export const generateExtensionPrompt = (
  ext: RenderExtension | EffectsExtension
): string => {
  return formatExtensionDescription(describeExtension(ext));
};

/**
 * Generates a single prompt for multiple extensions, separated by '---'.
 * @param exts An array of extensions to generate a prompt for.
 * @returns A string representing the tool definitions for all extensions.
 */
export const generateExtensionsPrompt = (
  exts: Array<RenderExtension | EffectsExtension>
): string => {
  return exts.map(generateExtensionPrompt).join("\n\n---\n\n");
};
