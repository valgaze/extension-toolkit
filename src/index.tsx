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
 *
 * Note: if exporting multiple extensions, each one (ideally) should have a unique export name and id
 */
export { FormExtension } from "./FormExtension/Extension.tsx";
export { VideoExtension } from "./VideoExtension/Extension.tsx";
export { RecorderExtension } from "./RecorderExtension/Extension.tsx";
