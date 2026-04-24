import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "allocation-limit.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/allocation-limit.js"),
);
