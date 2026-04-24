import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "mongolian-vowel-separator-single-eval.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/mongolian-vowel-separator-single-eval.js"),
);
