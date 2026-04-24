import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-string-lf.js",
  { tags: ["known-passing"] },
  createTestHandler("language/line-terminators/invalid-string-lf.js"),
);
