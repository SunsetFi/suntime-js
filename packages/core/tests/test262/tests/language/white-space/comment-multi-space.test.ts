import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-multi-space.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/comment-multi-space.js"),
);
