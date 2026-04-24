import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-export-global.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-export-global.js"),
);
