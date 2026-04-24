import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length-enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/eval/length-enumerable.js"),
);
