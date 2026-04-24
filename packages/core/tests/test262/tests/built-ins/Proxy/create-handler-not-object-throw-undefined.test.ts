import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "create-handler-not-object-throw-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/create-handler-not-object-throw-undefined.js"),
);
