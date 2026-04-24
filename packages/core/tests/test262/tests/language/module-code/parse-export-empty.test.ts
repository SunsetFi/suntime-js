import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-export-empty.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-export-empty.js"),
);
