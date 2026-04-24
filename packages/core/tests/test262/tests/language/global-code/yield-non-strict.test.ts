import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "yield-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/yield-non-strict.js"),
);
