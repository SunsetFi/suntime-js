import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-expname-unpaired-surrogate.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/export-expname-unpaired-surrogate.js"),
);
