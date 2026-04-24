import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-return-via-escape-hex4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-return-via-escape-hex4.js"),
);
