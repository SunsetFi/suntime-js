import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "excessive-byteoffset-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/excessive-byteoffset-throws.js"),
);
