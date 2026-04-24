import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-function-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-function-via-escape-hex.js"),
);
