import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-dup-export-decl.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-dup-export-decl.js"),
);
