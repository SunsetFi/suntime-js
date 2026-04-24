import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-unicode-9.0.0-class-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/part-unicode-9.0.0-class-escaped.js"),
);
