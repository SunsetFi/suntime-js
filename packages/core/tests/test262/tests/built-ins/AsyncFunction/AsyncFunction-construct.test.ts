import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunction-construct.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunction-construct.js"),
);
