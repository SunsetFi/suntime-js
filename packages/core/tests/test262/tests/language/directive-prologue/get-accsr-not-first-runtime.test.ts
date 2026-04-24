import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-accsr-not-first-runtime.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/get-accsr-not-first-runtime.js"),
);
