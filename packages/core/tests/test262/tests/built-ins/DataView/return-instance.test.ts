import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-instance.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/return-instance.js"),
);
