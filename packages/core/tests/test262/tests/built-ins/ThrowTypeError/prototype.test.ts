import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ThrowTypeError/prototype.js"),
);
