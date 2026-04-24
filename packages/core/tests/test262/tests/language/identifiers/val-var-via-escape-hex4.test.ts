import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-var-via-escape-hex4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-var-via-escape-hex4.js"),
);
