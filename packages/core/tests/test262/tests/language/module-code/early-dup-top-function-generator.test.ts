import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-dup-top-function-generator.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-dup-top-function-generator.js"),
);
