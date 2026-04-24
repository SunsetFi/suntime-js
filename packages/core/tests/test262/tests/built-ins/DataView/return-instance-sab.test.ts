import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-instance-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/return-instance-sab.js"),
);
