import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-set-method-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/get-set-method-failure.js"),
);
