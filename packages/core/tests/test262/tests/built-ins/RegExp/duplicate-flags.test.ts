import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "duplicate-flags.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/duplicate-flags.js"),
);
