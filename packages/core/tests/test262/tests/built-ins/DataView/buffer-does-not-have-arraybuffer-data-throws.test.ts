import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "buffer-does-not-have-arraybuffer-data-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/buffer-does-not-have-arraybuffer-data-throws.js"),
);
