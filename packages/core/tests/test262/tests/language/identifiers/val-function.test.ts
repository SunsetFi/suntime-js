import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-function.js"),
);
