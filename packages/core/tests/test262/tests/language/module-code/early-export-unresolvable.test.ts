import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-export-unresolvable.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-export-unresolvable.js"),
);
