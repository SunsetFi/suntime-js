import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-dollar-sign.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-dollar-sign.js"),
);
