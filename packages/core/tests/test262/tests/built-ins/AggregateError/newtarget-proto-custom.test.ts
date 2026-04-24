import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "newtarget-proto-custom.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/newtarget-proto-custom.js"),
);
