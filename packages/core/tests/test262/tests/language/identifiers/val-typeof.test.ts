import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-typeof.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-typeof.js"),
);
