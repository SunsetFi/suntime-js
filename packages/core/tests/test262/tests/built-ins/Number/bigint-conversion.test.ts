import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "bigint-conversion.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/bigint-conversion.js"),
);
