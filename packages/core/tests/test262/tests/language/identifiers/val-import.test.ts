import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-import.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-import.js"),
);
