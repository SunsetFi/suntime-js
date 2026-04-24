import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-break.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-break.js"),
);
