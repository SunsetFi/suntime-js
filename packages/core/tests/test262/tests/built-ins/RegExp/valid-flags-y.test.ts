import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "valid-flags-y.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/valid-flags-y.js"),
);
