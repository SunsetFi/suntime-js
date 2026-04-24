import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-undef-continue.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-undef-continue.js"),
);
