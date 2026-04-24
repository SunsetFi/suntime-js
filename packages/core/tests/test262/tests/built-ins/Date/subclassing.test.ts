import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "subclassing.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/subclassing.js"),
);
