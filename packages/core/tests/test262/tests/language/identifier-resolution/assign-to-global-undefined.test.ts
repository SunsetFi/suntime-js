import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "assign-to-global-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifier-resolution/assign-to-global-undefined.js"),
);
