import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-super.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-super.js"),
);
