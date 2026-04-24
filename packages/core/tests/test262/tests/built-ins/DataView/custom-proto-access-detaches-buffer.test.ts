import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "custom-proto-access-detaches-buffer.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/custom-proto-access-detaches-buffer.js"),
);
