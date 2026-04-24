import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-this-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-this-via-escape-hex.js"),
);
