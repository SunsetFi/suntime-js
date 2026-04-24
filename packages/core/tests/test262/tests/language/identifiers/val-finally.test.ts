import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-finally.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-finally.js"),
);
