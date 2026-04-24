import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ancestry.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/StringIteratorPrototype/ancestry.js"),
);
