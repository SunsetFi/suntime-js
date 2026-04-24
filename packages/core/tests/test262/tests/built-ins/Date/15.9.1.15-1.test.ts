import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.9.1.15-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/15.9.1.15-1.js"),
);
