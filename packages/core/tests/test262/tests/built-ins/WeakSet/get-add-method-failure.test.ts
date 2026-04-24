import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-add-method-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakSet/get-add-method-failure.js"),
);
