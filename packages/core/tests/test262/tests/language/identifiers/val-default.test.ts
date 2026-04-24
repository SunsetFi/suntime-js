import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-default.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-default.js"),
);
