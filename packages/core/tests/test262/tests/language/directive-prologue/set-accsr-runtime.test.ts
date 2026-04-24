import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-accsr-runtime.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/set-accsr-runtime.js"),
);
