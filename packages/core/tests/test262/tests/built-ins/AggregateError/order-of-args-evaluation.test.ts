import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "order-of-args-evaluation.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AggregateError/order-of-args-evaluation.js"),
);
