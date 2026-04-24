import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "dup-bound-names.js",
  { tags: ["known-passing"] },
  createTestHandler("language/import/dup-bound-names.js"),
);
