import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-comment-single-cr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/line-terminators/invalid-comment-single-cr.js"),
);
