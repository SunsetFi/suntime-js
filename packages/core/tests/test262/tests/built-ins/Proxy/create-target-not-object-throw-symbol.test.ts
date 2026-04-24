import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "create-target-not-object-throw-symbol.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/create-target-not-object-throw-symbol.js"),
);
