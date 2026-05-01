import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-await-expr-in-param.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/instance-await-expr-in-param.js"),
);
