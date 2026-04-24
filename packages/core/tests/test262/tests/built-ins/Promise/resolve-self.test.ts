import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-self.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve-self.js"),
);
