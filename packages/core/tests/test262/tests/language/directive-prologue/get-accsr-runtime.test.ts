import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-accsr-runtime.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/get-accsr-runtime.js"),
);
