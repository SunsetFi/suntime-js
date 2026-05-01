import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "import-source.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/source-phase-import/import-source.js"),
);
