import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "errors-iterabletolist.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/errors-iterabletolist.js"),
);
