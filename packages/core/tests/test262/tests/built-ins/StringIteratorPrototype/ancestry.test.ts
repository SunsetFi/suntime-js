import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ancestry.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/StringIteratorPrototype/ancestry.js"),
);
