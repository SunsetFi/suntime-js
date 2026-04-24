import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunction-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunction-prototype.js"),
);
