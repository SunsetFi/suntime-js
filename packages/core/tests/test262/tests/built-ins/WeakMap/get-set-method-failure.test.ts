import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-set-method-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/get-set-method-failure.js"),
);
