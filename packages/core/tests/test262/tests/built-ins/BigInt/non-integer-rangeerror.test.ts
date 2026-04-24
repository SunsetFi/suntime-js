import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "non-integer-rangeerror.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/non-integer-rangeerror.js"),
);
