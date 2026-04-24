import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-iterable-empty-does-not-call-add.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Set/set-iterable-empty-does-not-call-add.js"),
);
