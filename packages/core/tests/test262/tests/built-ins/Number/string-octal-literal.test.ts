import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-octal-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/string-octal-literal.js"),
);
