import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-continue.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-continue.js"),
);
