import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-with-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-with-via-escape-hex.js"),
);
