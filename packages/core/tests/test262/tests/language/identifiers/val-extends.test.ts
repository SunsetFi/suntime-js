import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-extends.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-extends.js"),
);
