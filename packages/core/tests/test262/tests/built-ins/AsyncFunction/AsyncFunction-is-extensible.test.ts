import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunction-is-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunction-is-extensible.js"),
);
