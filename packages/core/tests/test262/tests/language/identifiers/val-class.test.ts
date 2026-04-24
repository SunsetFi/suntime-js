import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-class.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-class.js"),
);
