import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-private-names-member-expression-this.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/invalid-private-names-member-expression-this.js"),
);
