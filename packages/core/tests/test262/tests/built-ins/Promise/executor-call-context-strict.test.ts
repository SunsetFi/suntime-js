import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "executor-call-context-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/executor-call-context-strict.js"),
);
