import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-digits.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/part-digits.js"),
);
