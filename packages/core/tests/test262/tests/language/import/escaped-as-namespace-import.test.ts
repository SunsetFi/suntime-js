import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "escaped-as-namespace-import.js",
  { tags: ["known-passing"] },
  createTestHandler("language/import/escaped-as-namespace-import.js"),
);
