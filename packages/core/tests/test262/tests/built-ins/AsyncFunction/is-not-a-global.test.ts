import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "is-not-a-global.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/is-not-a-global.js"),
);
