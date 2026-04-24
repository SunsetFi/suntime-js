import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "export-expname-from-star-unpaired-surrogate.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/export-expname-from-star-unpaired-surrogate.js"),
);
