import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-multi-nbsp.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/comment-multi-nbsp.js"),
);
