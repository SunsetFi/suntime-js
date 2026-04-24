import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-case-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-case-via-escape-hex.js"),
);
