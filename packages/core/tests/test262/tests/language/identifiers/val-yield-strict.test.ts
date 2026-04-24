import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-yield-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-yield-strict.js"),
);
