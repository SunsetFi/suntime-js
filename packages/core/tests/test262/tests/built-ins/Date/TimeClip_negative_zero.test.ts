import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "TimeClip_negative_zero.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/TimeClip_negative_zero.js"),
);
