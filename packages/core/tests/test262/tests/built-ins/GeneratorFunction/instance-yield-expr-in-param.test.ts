import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-yield-expr-in-param.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/GeneratorFunction/instance-yield-expr-in-param.js"),
);
