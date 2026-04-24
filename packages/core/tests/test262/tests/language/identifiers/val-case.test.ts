import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-case.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-case.js"),
);
