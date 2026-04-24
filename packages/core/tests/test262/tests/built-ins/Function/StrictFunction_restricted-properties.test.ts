import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "StrictFunction_restricted-properties.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Function/StrictFunction_restricted-properties.js"),
);
