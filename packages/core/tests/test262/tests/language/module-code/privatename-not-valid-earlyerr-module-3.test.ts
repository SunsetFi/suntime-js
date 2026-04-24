import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "privatename-not-valid-earlyerr-module-3.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/privatename-not-valid-earlyerr-module-3.js"),
);
