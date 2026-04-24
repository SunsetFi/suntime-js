import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toindex-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayBuffer/toindex-length.js"),
);
