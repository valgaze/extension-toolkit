import { z } from "zod";
import type { ExtensionConfig } from "../../util/types/extension";

export const extension_config: ExtensionConfig = {
  id: "ext_rating",
  reference_name: "StarRater",
  description: `## Star Rating Extension:
<use_case>
    Use this tool to collect user ratings and feedback through an interactive star rating system.
    Perfect for gathering user satisfaction scores and detailed feedback.
</use_case>
<important_notes>
    1. Default rating scale is 1-5 stars, but can be customized
    2. Optional comment field can be enabled for detailed feedback
    3. Custom labels can be added for the rating scale (e.g., "Poor" to "Excellent")
    4. Supports both light and dark themes
</important_notes>`,
  supports_dark_mode: true,
};
