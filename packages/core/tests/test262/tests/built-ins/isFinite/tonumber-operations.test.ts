import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "tonumber-operations.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isFinite/tonumber-operations.js"),
);
