import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "infinity-throws-rangeerror.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/infinity-throws-rangeerror.js"),
);
