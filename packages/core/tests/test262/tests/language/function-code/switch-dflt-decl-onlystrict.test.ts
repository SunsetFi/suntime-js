import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "switch-dflt-decl-onlystrict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/function-code/switch-dflt-decl-onlystrict.js"),
);
