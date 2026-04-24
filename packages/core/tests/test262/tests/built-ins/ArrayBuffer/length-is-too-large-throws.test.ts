import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length-is-too-large-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayBuffer/length-is-too-large-throws.js"),
);
