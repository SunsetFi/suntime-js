import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ThrowTypeError/extensible.js"),
);
