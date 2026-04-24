import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "escaped-as-import-specifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/import/escaped-as-import-specifier.js"),
);
