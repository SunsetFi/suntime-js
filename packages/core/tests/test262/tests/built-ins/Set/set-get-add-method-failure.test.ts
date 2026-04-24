import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-get-add-method-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-get-add-method-failure.js"),
);
