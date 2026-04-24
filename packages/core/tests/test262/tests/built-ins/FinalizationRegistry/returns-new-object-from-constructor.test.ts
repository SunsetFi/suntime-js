import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "returns-new-object-from-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/FinalizationRegistry/returns-new-object-from-constructor.js"),
);
