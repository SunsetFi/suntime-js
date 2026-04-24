import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "buffer-not-object-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/buffer-not-object-throws.js"),
);
