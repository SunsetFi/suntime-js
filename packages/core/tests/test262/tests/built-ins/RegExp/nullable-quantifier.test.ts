import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "nullable-quantifier.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/nullable-quantifier.js"),
);
