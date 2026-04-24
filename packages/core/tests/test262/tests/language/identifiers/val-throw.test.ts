import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-throw.js"),
);
