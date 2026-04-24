import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-tokens-lf.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/between-tokens-lf.js"),
);
