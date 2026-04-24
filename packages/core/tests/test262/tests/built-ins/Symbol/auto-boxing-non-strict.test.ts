import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "auto-boxing-non-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/auto-boxing-non-strict.js"),
);
