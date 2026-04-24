import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-private-names-call-expression-bad-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/invalid-private-names-call-expression-bad-reference.js"),
);
