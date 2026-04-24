import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "defined-byteoffset-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/defined-byteoffset-sab.js"),
);
