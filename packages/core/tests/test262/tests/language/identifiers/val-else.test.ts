import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-else.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-else.js"),
);
