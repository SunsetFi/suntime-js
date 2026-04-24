import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "nan-throws-rangeerror.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/nan-throws-rangeerror.js"),
);
