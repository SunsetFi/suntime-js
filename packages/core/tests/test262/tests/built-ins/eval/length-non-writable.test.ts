import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length-non-writable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/eval/length-non-writable.js"),
);
