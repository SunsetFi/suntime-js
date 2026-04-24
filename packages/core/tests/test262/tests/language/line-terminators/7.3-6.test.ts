import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "7.3-6.js",
  { tags: ["known-passing"] },
  createTestHandler("language/line-terminators/7.3-6.js"),
);
