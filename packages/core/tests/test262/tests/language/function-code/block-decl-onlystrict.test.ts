import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-decl-onlystrict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/function-code/block-decl-onlystrict.js"),
);
