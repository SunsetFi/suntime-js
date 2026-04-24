import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "privatename-valid-no-earlyerr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/privatename-valid-no-earlyerr.js"),
);
