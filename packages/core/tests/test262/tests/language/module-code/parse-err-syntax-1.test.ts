import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-syntax-1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/parse-err-syntax-1.js"),
);
