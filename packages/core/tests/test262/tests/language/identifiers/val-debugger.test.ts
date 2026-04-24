import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-debugger.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-debugger.js"),
);
