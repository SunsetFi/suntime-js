import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "throw-from-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AbstractModuleSource/throw-from-constructor.js"),
);
