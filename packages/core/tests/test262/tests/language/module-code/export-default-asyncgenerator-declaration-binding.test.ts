import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-default-asyncgenerator-declaration-binding.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/export-default-asyncgenerator-declaration-binding.js"),
);
