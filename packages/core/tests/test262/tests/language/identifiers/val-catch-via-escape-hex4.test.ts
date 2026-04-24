import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-catch-via-escape-hex4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-catch-via-escape-hex4.js"),
);
