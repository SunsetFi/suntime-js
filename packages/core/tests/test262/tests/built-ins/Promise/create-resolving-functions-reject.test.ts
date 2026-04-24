import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "create-resolving-functions-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/create-resolving-functions-reject.js"),
);
