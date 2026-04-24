import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "negative-infinity-throws.rangeerror.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/negative-infinity-throws.rangeerror.js"),
);
