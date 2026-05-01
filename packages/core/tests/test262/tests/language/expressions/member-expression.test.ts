import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "computed-reference-null-or-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/member-expression/computed-reference-null-or-undefined.js",
  ),
);
