import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-dup-export-dflt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-dup-export-dflt.js"),
);
