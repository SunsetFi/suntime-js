import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-vertical-tab.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/between-vertical-tab.js"),
);
