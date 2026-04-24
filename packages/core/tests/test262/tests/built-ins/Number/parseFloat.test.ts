import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parseFloat.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/parseFloat.js"),
);
