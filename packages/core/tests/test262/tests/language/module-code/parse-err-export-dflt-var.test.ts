import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-export-dflt-var.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-export-dflt-var.js"),
);
