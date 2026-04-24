import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "script-decl-func-dups.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/script-decl-func-dups.js"),
);
