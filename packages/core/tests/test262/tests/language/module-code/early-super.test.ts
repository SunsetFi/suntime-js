import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-super.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-super.js"),
);
