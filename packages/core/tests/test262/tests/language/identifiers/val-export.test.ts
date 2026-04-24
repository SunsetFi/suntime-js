import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-export.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-export.js"),
);
