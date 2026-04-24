import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "message-undefined-no-prop.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/message-undefined-no-prop.js"),
);
