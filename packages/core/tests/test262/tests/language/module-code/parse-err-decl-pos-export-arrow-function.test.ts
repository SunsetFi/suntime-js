import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-decl-pos-export-arrow-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-decl-pos-export-arrow-function.js"),
);
