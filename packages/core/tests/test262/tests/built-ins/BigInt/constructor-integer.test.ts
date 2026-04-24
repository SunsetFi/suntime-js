import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor-integer.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/constructor-integer.js"),
);
