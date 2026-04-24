import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-regexp-ps.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/invalid-regexp-ps.js"),
);
