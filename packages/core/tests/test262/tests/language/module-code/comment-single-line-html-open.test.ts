import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-single-line-html-open.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/comment-single-line-html-open.js"),
);
