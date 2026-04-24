import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-does-not-throw-when-add-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Set/set-does-not-throw-when-add-is-not-callable.js"),
);
