import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "escaped-as-export-specifier.js",
  { tags: ["known-failing"] },
  createTestHandler("language/export/escaped-as-export-specifier.js"),
);
