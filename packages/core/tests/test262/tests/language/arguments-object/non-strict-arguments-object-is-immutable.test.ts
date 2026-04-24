import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "non-strict-arguments-object-is-immutable.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/non-strict-arguments-object-is-immutable.js"),
);
