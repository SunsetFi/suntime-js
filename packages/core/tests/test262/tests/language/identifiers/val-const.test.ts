import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-const.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-const.js"),
);
