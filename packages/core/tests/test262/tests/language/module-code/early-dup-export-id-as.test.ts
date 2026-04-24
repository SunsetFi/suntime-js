import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-dup-export-id-as.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-dup-export-id-as.js"),
);
