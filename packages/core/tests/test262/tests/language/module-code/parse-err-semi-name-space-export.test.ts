import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-semi-name-space-export.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/parse-err-semi-name-space-export.js"),
);
