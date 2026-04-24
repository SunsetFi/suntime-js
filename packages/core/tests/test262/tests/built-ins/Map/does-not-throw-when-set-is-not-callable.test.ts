import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "does-not-throw-when-set-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/does-not-throw-when-set-is-not-callable.js"),
);
