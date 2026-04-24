import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "comment-single-space.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/comment-single-space.js"),
);
