import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-return.js"),
);
