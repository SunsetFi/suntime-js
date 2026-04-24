import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-unicode-6.0.0-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/part-unicode-6.0.0-escaped.js"),
);
