import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vals-cjk-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/vals-cjk-escaped.js"),
);
