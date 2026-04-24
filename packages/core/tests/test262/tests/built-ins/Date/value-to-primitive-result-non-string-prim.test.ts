import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "value-to-primitive-result-non-string-prim.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/value-to-primitive-result-non-string-prim.js"),
);
