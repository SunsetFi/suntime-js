import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call-value-of-when-to-string-present.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/call-value-of-when-to-string-present.js"),
);
