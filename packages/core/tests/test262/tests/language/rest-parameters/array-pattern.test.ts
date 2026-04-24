import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "array-pattern.js",
  { tags: ["known-passing"] },
  createTestHandler("language/rest-parameters/array-pattern.js"),
);
