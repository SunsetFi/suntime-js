import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call-bind-this-realm-undef.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/call-bind-this-realm-undef.js"),
);
