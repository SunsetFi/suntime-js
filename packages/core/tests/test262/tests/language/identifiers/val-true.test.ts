import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-true.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-true.js"),
);
