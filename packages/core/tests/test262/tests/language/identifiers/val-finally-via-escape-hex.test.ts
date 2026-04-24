import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-finally-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-finally-via-escape-hex.js"),
);
