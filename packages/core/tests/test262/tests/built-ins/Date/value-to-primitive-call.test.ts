import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "value-to-primitive-call.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/value-to-primitive-call.js"),
);
