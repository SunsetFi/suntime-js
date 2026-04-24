import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-semi-export-star.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-semi-export-star.js"),
);
