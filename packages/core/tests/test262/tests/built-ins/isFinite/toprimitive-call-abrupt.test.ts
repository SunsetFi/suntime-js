import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toprimitive-call-abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isFinite/toprimitive-call-abrupt.js"),
);
