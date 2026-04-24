import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-const-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-const-via-escape-hex.js"),
);
