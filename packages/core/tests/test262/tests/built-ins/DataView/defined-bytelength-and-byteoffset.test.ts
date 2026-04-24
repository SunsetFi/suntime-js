import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "defined-bytelength-and-byteoffset.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/defined-bytelength-and-byteoffset.js"),
);
