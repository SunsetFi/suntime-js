import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-typeof-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-typeof-via-escape-hex.js"),
);
