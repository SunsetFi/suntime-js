import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-zwnj-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/start-zwnj-escaped.js"),
);
