import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-delete-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-delete-via-escape-hex.js"),
);
