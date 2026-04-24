import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-function-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve-function-name.js"),
);
