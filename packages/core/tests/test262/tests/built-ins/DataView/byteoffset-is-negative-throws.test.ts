import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "byteoffset-is-negative-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/byteoffset-is-negative-throws.js"),
);
