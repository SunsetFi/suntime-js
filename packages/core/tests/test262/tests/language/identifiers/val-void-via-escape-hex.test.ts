import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-void-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-void-via-escape-hex.js"),
);
