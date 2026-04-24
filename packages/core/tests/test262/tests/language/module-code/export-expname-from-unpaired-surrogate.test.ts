import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-expname-from-unpaired-surrogate.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/export-expname-from-unpaired-surrogate.js"),
);
