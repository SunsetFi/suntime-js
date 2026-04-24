import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toprimitive-result-is-object-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isFinite/toprimitive-result-is-object-throws.js"),
);
