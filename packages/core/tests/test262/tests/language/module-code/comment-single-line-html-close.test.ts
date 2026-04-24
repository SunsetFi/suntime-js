import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-single-line-html-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/comment-single-line-html-close.js"),
);
