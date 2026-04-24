import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-null.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-null.js"),
);
