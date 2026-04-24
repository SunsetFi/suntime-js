import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "zero-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/zero-length.js"),
);
