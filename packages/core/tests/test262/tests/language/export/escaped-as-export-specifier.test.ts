import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "escaped-as-export-specifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/export/escaped-as-export-specifier.js"),
);
