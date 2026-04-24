import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-vertical-tab.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/string-vertical-tab.js"),
);
