import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-ref-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/keywords/ident-ref-try.js"),
);
