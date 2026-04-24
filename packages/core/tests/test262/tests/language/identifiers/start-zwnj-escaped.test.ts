import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-zwnj-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-zwnj-escaped.js"),
);
