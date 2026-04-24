import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toprimitive-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isNaN/toprimitive-get-abrupt.js"),
);
