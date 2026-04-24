import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-semi-name-space-export.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-semi-name-space-export.js"),
);
