import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-no-iterable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-no-iterable.js"),
);
