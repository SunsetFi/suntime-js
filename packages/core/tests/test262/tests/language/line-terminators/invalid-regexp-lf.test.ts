import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-regexp-lf.js",
  { tags: ["known-passing"] },
  createTestHandler("language/line-terminators/invalid-regexp-lf.js"),
);
