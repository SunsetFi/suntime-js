import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-prms-cstm-then-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve-prms-cstm-then-immed.js"),
);
