import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "custom-proto-access-throws-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/custom-proto-access-throws-sab.js"),
);
