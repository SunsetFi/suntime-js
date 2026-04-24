import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-string-cr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/invalid-string-cr.js"),
);
