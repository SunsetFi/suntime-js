import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-false.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-false.js"),
);
