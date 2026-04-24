import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-13.0.0-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-unicode-13.0.0-escaped.js"),
);
