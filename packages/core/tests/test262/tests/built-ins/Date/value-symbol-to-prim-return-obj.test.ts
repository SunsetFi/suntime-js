import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "value-symbol-to-prim-return-obj.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/value-symbol-to-prim-return-obj.js"),
);
