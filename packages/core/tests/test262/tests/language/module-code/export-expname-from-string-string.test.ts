import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-expname-from-string-string.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/export-expname-from-string-string.js"),
);
