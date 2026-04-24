import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-5.2.0-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-unicode-5.2.0-escaped.js"),
);
