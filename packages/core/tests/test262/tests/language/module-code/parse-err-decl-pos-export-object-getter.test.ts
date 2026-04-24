import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-decl-pos-export-object-getter.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/parse-err-decl-pos-export-object-getter.js"),
);
