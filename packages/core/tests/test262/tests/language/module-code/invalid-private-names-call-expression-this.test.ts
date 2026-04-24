import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invalid-private-names-call-expression-this.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/invalid-private-names-call-expression-this.js"),
);
