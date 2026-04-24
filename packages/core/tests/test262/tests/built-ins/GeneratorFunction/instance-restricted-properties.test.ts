import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-restricted-properties.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/GeneratorFunction/instance-restricted-properties.js"),
);
