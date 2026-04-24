import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-decl-pos-import-while.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/parse-err-decl-pos-import-while.js"),
);
