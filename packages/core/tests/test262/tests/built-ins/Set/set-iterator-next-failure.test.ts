import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-iterator-next-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-iterator-next-failure.js"),
);
