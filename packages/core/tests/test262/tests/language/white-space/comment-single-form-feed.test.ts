import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-single-form-feed.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/comment-single-form-feed.js"),
);
