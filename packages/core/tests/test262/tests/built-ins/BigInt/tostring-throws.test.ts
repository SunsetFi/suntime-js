import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "tostring-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/tostring-throws.js"),
);
