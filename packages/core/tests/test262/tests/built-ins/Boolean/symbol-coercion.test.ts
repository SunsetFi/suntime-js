import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "symbol-coercion.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Boolean/symbol-coercion.js"),
);
