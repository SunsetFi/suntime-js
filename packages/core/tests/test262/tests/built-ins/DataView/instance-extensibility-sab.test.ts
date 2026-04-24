import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-extensibility-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/instance-extensibility-sab.js"),
);
