import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-true.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-true.js"),
);
