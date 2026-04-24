import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "executor-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/executor-not-callable.js"),
);
