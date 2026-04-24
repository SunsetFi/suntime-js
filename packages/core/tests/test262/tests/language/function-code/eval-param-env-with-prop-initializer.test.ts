import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-param-env-with-prop-initializer.js",
  { tags: ["known-passing"] },
  createTestHandler("language/function-code/eval-param-env-with-prop-initializer.js"),
);
