import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-single-horizontal-tab.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/comment-single-horizontal-tab.js"),
);
