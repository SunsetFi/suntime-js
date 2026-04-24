import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "executor-function-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/executor-function-length.js"),
);
