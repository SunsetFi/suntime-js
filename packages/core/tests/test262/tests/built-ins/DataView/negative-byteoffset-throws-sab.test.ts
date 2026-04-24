import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "negative-byteoffset-throws-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/negative-byteoffset-throws-sab.js"),
);
