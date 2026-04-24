import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-super.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-super.js"),
);
