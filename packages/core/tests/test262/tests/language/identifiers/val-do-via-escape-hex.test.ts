import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-do-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-do-via-escape-hex.js"),
);
