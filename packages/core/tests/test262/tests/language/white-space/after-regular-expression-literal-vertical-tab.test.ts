import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "after-regular-expression-literal-vertical-tab.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/after-regular-expression-literal-vertical-tab.js"),
);
