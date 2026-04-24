import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "exception-after-resolve-in-executor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/exception-after-resolve-in-executor.js"),
);
