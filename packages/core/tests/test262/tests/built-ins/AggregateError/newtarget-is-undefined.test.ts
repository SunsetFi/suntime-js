import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "newtarget-is-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/newtarget-is-undefined.js"),
);
