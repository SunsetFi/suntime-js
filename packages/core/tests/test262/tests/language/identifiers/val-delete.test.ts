import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-delete.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-delete.js"),
);
