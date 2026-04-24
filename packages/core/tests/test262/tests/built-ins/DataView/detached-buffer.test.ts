import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "detached-buffer.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/detached-buffer.js"),
);
