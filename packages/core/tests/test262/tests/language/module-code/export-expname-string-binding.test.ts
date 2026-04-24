import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-expname-string-binding.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/export-expname-string-binding.js"),
);
