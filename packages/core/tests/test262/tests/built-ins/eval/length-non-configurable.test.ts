import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length-non-configurable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/eval/length-non-configurable.js"),
);
