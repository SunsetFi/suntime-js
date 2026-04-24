import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-return.js"),
);
