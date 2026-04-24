import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-default-function-declaration-binding.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/export-default-function-declaration-binding.js"),
);
