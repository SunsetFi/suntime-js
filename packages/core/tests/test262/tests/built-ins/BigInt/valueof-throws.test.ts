import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "valueof-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/valueof-throws.js"),
);
