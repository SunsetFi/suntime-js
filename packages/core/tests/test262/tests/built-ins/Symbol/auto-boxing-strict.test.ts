import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "auto-boxing-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/auto-boxing-strict.js"),
);
