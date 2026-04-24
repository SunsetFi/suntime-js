import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-invoke-anon-gen-decl.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-invoke-anon-gen-decl.js"),
);
