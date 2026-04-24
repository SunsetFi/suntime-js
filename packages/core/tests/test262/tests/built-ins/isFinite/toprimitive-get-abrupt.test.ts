import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toprimitive-get-abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isFinite/toprimitive-get-abrupt.js"),
);
