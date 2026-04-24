import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-tokens-ls.js",
  { tags: ["known-passing"] },
  createTestHandler("language/line-terminators/between-tokens-ls.js"),
);
