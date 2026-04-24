import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-decl-pos-export-for-in-var.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-decl-pos-export-for-in-var.js"),
);
