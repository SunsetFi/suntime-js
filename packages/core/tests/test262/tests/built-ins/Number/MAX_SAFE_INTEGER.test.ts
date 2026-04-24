import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "MAX_SAFE_INTEGER.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/MAX_SAFE_INTEGER.js"),
);
