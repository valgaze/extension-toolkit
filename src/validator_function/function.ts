import * as extensions from './../index'

console.log("extensions", extensions)
/*
 With extensions we can validate the payload of the trace-- here you could write a function that can validate/repair any data passed in by an LLM

 If pass, use the extension otherwise throw an error or send to a different agent to make sure zod schemas pass.

 Do the work up in the VF diagram, NOT in the user's browser

 ex.

 ```ts
 export const validateFunc = (args: any) => {

     // Validate input at runtime, you'll get a detailed error message if the input is invalid
    const { text, userId } = inputSchema.parse(args.inputVars);


   // Return response
    return {
      outputVars: output,
      next: {
        path: "success",
      },
      trace: [
        {
          type: "text" as const,
          payload: {
            message: `Converted "${text}" to "${upperText}" and created post #${apiResponse.id} at ${timestamp}`,
          },
        },
      ],
    };
  } catch (error) {
    // Get detailed error message from Zod
    const message =
      error instanceof z.ZodError
        ? error.errors
            .map((e) => `${e.path.join(".")}: ${e.message}`)
            .join("\n")
        : error instanceof Error
        ? error.message
        : "An unknown error occurred";

    return {
      outputVars: {
        errorMessage: message,
        upperText: "",
      },
      next: {
        path: "error",
      },
      trace: [
        {
          type: "debug" as const,
          payload: {
            message: `❌ Error:\n${message}`,
          },
        },
      ],
    };
  }
};

 }

 ```
 */
