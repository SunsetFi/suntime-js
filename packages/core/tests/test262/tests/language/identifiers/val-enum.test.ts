import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-enum.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/val-enum.js"),
);
