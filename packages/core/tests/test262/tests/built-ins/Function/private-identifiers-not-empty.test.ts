import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "private-identifiers-not-empty.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Function/private-identifiers-not-empty.js"),
);
