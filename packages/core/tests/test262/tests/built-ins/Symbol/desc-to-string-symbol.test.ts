import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "desc-to-string-symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/desc-to-string-symbol.js"),
);
