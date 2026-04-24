import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-6.0.0-class-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/start-unicode-6.0.0-class-escaped.js"),
);
