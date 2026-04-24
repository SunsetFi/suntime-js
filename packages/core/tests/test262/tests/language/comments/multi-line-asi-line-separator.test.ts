import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "multi-line-asi-line-separator.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/multi-line-asi-line-separator.js"),
);
