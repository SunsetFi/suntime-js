import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-regexp-ls.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/invalid-regexp-ls.js"),
);
