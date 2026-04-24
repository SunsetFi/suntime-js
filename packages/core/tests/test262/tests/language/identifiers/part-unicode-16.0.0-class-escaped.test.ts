import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-unicode-16.0.0-class-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/part-unicode-16.0.0-class-escaped.js"),
);
