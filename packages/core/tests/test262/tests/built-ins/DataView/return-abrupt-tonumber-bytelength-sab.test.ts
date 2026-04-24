import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-abrupt-tonumber-bytelength-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/return-abrupt-tonumber-bytelength-sab.js"),
);
