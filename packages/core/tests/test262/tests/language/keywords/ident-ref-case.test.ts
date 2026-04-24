import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-ref-case.js",
  { tags: ["known-passing"] },
  createTestHandler("language/keywords/ident-ref-case.js"),
);
