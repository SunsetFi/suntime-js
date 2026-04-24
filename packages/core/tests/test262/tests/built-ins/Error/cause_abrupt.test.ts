import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cause_abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Error/cause_abrupt.js"),
);
