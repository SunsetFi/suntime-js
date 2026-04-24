import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-ref-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/keywords/ident-ref-throw.js"),
);
