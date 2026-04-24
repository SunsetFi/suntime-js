import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-try-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-try-via-escape-hex.js"),
);
