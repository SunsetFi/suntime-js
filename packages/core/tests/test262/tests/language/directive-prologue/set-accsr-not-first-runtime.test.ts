import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-accsr-not-first-runtime.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/set-accsr-not-first-runtime.js"),
);
