import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-if-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-if-via-escape-hex.js"),
);
