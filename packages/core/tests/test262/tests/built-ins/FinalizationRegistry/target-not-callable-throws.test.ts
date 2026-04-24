import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "target-not-callable-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/FinalizationRegistry/target-not-callable-throws.js"),
);
