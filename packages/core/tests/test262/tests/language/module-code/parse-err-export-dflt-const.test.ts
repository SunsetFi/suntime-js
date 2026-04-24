import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-export-dflt-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-export-dflt-const.js"),
);
