import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toprimitive-call-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isNaN/toprimitive-call-abrupt.js"),
);
