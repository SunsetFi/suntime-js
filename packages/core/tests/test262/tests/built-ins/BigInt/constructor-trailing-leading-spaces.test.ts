import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor-trailing-leading-spaces.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/constructor-trailing-leading-spaces.js"),
);
