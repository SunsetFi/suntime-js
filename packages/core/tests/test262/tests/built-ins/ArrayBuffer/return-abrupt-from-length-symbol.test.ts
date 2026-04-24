import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-abrupt-from-length-symbol.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayBuffer/return-abrupt-from-length-symbol.js"),
);
