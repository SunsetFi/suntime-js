import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "executor-function-not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/executor-function-not-a-constructor.js"),
);
