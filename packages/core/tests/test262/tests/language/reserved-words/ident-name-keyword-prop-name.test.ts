import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-name-keyword-prop-name.js",
  { tags: ["known-passing"] },
  createTestHandler("language/reserved-words/ident-name-keyword-prop-name.js"),
);
