import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-10.0.0-class-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-unicode-10.0.0-class-escaped.js"),
);
