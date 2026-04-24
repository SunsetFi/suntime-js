import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "getOwnPropertyNames.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Temporal/getOwnPropertyNames.js"),
);
