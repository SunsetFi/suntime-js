import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "multi-line-asi-line-feed.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/multi-line-asi-line-feed.js"),
);
