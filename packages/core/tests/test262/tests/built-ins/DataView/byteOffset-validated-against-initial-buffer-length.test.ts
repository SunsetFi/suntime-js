import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "byteOffset-validated-against-initial-buffer-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/byteOffset-validated-against-initial-buffer-length.js"),
);
