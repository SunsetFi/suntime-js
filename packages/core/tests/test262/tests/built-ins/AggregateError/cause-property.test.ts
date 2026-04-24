import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cause-property.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/cause-property.js"),
);
