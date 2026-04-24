import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "is-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/is-a-constructor.js"),
);
