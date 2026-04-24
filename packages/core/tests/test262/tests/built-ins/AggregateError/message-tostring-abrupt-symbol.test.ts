import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "message-tostring-abrupt-symbol.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/message-tostring-abrupt-symbol.js"),
);
