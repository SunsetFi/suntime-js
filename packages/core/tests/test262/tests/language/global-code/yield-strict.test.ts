import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "yield-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/yield-strict.js"),
);
