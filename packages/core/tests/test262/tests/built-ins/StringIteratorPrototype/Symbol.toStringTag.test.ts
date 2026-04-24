import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Symbol.toStringTag.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/StringIteratorPrototype/Symbol.toStringTag.js"),
);
