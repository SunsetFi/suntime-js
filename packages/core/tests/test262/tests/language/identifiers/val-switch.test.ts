import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-switch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-switch.js"),
);
