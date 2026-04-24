import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-dup-top-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-dup-top-function.js"),
);
