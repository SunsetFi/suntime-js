import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-thenable-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve-thenable-immed.js"),
);
