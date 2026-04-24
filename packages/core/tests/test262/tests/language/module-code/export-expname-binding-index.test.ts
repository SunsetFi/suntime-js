import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-expname-binding-index.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/export-expname-binding-index.js"),
);
