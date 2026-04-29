import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toprimitive-not-callable-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isNaN/toprimitive-not-callable-throws.js"),
);
