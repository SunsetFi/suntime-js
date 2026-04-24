import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "uniqueness.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/uniqueness.js"),
);
