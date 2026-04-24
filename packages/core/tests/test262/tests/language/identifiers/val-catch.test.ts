import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-catch.js"),
);
