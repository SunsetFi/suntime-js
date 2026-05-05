import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unique-per-realm-non-simple.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ThrowTypeError/unique-per-realm-non-simple.js"),
);
