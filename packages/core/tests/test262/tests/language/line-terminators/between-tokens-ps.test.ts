import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-tokens-ps.js",
  { tags: ["known-passing"] },
  createTestHandler("language/line-terminators/between-tokens-ps.js"),
);
