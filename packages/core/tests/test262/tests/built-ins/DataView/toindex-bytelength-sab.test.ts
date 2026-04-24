import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toindex-bytelength-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/toindex-bytelength-sab.js"),
);
