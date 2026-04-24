import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-default-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-default-via-escape-hex.js"),
);
