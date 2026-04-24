import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/prototype.js"),
);
