import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-in-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-in-via-escape-hex.js"),
);
