import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "bigint-number-same-value.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/bigint-number-same-value.js"),
);
