import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unicode-escape-nls-err.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/unicode-escape-nls-err.js"),
);
