import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toindex-bytelength.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/toindex-bytelength.js"),
);
