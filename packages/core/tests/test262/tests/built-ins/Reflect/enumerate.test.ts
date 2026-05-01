import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/enumerate/undefined.js"),
);
