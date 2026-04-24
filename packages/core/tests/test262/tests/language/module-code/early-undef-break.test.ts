import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-undef-break.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-undef-break.js"),
);
