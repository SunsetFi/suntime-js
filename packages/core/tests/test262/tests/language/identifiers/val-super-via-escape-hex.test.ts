import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-super-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-super-via-escape-hex.js"),
);
