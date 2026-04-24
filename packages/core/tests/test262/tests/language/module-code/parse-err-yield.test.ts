import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-yield.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-yield.js"),
);
