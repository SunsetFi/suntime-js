import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "function-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/function-prototype.js"),
);
