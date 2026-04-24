import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-with.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-with.js"),
);
