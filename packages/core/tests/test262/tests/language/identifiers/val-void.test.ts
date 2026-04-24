import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-void.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-void.js"),
);
