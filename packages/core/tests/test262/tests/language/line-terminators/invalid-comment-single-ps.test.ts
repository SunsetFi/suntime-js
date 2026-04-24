import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-comment-single-ps.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/invalid-comment-single-ps.js"),
);
