import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-single-form-feed.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/comment-single-form-feed.js"),
);
