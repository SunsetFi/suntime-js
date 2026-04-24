import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vals-eng-alpha-lower.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/vals-eng-alpha-lower.js"),
);
