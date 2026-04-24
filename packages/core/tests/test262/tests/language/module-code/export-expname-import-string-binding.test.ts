import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-expname-import-string-binding.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/export-expname-import-string-binding.js"),
);
