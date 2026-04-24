import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-while-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-while-via-escape-hex.js"),
);
