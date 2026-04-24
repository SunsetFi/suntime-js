import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-name-global-property-memberexpr-str.js",
  { tags: ["known-failing"] },
  createTestHandler("language/reserved-words/ident-name-global-property-memberexpr-str.js"),
);
