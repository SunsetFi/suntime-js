import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "is-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ThrowTypeError/is-function.js"),
);
