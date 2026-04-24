import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unicode_identity_escape.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/unicode_identity_escape.js"),
);
