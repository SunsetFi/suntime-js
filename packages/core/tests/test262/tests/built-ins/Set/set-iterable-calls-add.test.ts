import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-iterable-calls-add.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-iterable-calls-add.js"),
);
