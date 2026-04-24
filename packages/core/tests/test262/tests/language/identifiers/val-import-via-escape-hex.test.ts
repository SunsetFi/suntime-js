import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-import-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-import-via-escape-hex.js"),
);
