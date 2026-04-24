import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "private-identifiers-not-empty.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/eval/private-identifiers-not-empty.js"),
);
