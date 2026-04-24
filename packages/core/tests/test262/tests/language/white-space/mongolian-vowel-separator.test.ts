import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "mongolian-vowel-separator.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/mongolian-vowel-separator.js"),
);
