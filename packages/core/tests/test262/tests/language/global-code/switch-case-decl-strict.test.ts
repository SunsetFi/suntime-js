import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "switch-case-decl-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/switch-case-decl-strict.js"),
);
