/*
 * 🔌 EXPORT YOUR EXTENSIONS HERE 🔌
 * ================================
 *
 * ⚠️ IMPORTANT: Each export must be a valid extension with:
 *    {
 *      name: string,
 *      type: "response" | "effect",
 *      match: (props) => boolean,
 *      render?: (props) => void,    // for response type
 *      effect?: (props) => void     // for "effect" type
 *    }
 */
export { FormExtension } from "./FormExtension/Extension.tsx";
