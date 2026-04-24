import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "has-instance.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/GeneratorFunction/has-instance.js"),
);
