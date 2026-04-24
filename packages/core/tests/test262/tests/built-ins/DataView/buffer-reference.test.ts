import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "buffer-reference.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/buffer-reference.js"),
);
