import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-regexp-cr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/invalid-regexp-cr.js"),
);
