import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-single-nbsp.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/comment-single-nbsp.js"),
);
