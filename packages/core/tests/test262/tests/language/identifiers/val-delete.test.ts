import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-delete.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-delete.js"),
);
