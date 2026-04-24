import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "message-method-prop-cast.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/message-method-prop-cast.js"),
);
