import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-break-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-break-via-escape-hex.js"),
);
