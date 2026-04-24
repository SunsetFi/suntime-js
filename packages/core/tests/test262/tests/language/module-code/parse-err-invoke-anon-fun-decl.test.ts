import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-invoke-anon-fun-decl.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/parse-err-invoke-anon-fun-decl.js"),
);
