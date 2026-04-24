import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "multi-line-asi-carriage-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/multi-line-asi-carriage-return.js"),
);
