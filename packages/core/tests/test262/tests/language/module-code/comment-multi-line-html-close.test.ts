import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-multi-line-html-close.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/comment-multi-line-html-close.js"),
);
