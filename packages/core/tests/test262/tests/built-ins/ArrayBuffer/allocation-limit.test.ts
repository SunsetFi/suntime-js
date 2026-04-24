import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "allocation-limit.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayBuffer/allocation-limit.js"),
);
