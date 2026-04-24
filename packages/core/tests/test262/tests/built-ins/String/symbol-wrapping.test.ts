import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "symbol-wrapping.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/symbol-wrapping.js"),
);
