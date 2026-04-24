import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-decl-pos-export-for-of-lhs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-decl-pos-export-for-of-lhs.js"),
);
