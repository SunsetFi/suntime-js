import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "nonexistent.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/parseInt/nonexistent.js"),
);
