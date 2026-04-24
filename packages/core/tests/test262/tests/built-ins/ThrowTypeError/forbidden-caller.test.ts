import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "forbidden-caller.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ThrowTypeError/forbidden-caller.js"),
);
