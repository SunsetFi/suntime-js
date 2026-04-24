import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-while.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-while.js"),
);
