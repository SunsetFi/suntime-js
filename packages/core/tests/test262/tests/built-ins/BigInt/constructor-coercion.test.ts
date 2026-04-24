import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor-coercion.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/constructor-coercion.js"),
);
