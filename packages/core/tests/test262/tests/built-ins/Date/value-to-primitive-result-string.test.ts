import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "value-to-primitive-result-string.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/value-to-primitive-result-string.js"),
);
