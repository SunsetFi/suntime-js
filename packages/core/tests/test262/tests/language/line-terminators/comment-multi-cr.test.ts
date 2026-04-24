import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-multi-cr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/comment-multi-cr.js"),
);
