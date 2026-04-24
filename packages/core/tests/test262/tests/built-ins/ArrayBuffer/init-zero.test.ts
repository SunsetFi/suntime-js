import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "init-zero.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayBuffer/init-zero.js"),
);
