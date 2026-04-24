import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "create-handler-not-object-throw-symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/create-handler-not-object-throw-symbol.js"),
);
