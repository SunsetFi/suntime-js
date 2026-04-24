import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-name-global-property-prop-name.js",
  { tags: ["known-passing"] },
  createTestHandler("language/reserved-words/ident-name-global-property-prop-name.js"),
);
