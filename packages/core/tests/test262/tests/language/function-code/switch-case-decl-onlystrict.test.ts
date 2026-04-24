import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "switch-case-decl-onlystrict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/function-code/switch-case-decl-onlystrict.js"),
);
