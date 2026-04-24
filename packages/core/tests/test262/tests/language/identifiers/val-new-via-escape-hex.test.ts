import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-new-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-new-via-escape-hex.js"),
);
