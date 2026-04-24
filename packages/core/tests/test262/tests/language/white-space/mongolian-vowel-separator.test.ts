import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "mongolian-vowel-separator.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/mongolian-vowel-separator.js"),
);
