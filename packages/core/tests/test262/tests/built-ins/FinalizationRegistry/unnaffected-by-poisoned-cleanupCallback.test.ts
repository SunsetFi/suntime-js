import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unnaffected-by-poisoned-cleanupCallback.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/FinalizationRegistry/unnaffected-by-poisoned-cleanupCallback.js"),
);
