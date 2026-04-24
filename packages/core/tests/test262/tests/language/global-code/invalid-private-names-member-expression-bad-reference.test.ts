import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-private-names-member-expression-bad-reference.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/global-code/invalid-private-names-member-expression-bad-reference.js",
  ),
);
