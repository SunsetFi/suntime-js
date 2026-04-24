import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-iterator-value-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-iterator-value-failure.js"),
);
