import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "single-line-html-close-without-lt.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/single-line-html-close-without-lt.js"),
);
