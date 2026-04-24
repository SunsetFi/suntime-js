import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "switch-dflt-decl-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/switch-dflt-decl-strict.js"),
);
