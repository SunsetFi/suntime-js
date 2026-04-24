import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "numeric-properties.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/numeric-properties.js"),
);
