import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toprimitive-valid-result.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isNaN/toprimitive-valid-result.js"),
);
