import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toindex-byteoffset.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/toindex-byteoffset.js"),
);
