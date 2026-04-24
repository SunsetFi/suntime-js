import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "toindex-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/toindex-length.js"),
);
