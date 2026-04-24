import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-prototype-abrupt-executor-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/get-prototype-abrupt-executor-not-callable.js"),
);
