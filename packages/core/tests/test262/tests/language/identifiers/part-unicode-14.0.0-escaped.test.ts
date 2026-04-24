import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-unicode-14.0.0-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/part-unicode-14.0.0-escaped.js"),
);
