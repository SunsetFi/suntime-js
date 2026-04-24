import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor-from-octal-string.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/constructor-from-octal-string.js"),
);
