import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "MIN_SAFE_INTEGER.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/MIN_SAFE_INTEGER.js"),
);
