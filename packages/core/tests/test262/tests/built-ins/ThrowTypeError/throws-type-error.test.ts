import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "throws-type-error.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ThrowTypeError/throws-type-error.js"),
);
