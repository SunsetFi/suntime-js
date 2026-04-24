import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-var-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-var-via-escape-hex.js"),
);
