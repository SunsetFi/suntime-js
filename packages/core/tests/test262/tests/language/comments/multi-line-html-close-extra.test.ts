import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "multi-line-html-close-extra.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/multi-line-html-close-extra.js"),
);
