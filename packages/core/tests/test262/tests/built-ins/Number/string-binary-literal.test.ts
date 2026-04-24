import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-binary-literal.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/string-binary-literal.js"),
);
