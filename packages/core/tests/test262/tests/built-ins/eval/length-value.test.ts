import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length-value.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/eval/length-value.js"),
);
