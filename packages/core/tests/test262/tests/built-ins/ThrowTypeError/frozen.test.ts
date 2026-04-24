import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "frozen.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ThrowTypeError/frozen.js"),
);
