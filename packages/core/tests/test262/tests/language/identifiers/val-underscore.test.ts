import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-underscore.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-underscore.js"),
);
