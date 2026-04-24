import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-true-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-true-via-escape-hex.js"),
);
