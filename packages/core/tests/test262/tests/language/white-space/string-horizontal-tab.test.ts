import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-horizontal-tab.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/string-horizontal-tab.js"),
);
