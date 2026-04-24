import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "defined-byteoffset.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/defined-byteoffset.js"),
);
