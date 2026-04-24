import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-import-via-escape-hex4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-import-via-escape-hex4.js"),
);
