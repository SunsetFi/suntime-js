import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-ref-delete.js",
  { tags: ["known-passing"] },
  createTestHandler("language/keywords/ident-ref-delete.js"),
);
