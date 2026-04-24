import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-extends-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-extends-via-escape-hex.js"),
);
