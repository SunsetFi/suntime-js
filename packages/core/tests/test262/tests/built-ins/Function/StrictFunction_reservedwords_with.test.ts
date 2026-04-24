import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "StrictFunction_reservedwords_with.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/StrictFunction_reservedwords_with.js"),
);
