import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "symbol_object-returns-fresh-symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/symbol_object-returns-fresh-symbol.js"),
);
