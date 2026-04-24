import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-default-generator-declaration-binding.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/export-default-generator-declaration-binding.js"),
);
