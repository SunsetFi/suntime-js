import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-import-as-arguments.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-import-as-arguments.js"),
);
