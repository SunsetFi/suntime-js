import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-default-generator-declaration-binding-exists.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/export-default-generator-declaration-binding-exists.js"),
);
