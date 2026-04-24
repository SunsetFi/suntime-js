import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-instanceof.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-instanceof.js"),
);
