import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunction-length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunction-length.js"),
);
