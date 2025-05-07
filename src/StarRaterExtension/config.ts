import { z } from "zod";
import type { ExtensionConfig } from "../../util/types/extension";

export const extension_config: ExtensionConfig = {
  id: "ext_rating",
  reference_name: "StarRater",
  description:
    "A star rating component that allows users to rate something and optionally provide feedback",
  supports_dark_mode: true,
};
