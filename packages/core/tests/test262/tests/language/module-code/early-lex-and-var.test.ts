import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-lex-and-var.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-lex-and-var.js"),
);
