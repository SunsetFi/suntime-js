import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-this.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-this.js"),
);
