import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "zero-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayBuffer/zero-length.js"),
);
