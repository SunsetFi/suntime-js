import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "removed-does-not-trigger.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/enumerate/removed-does-not-trigger.js"),
);
