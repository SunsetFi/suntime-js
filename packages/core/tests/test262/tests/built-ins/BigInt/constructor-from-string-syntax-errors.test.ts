import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor-from-string-syntax-errors.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/constructor-from-string-syntax-errors.js"),
);
