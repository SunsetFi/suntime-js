import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-non-obj-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve-non-obj-immed.js"),
);
