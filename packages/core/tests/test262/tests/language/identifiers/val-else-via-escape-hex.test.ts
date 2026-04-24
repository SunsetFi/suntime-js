import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-else-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-else-via-escape-hex.js"),
);
