import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "script-decl-func-err-non-configurable.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/script-decl-func-err-non-configurable.js"),
);
