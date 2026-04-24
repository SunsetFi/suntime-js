import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "no-construct.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/eval/no-construct.js"),
);
