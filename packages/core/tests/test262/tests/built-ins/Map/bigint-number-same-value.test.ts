import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "bigint-number-same-value.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/bigint-number-same-value.js"),
);
