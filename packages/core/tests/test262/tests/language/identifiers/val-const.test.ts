import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-const.js"),
);
