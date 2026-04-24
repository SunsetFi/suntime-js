import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-from-newtarget-abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/FinalizationRegistry/prototype-from-newtarget-abrupt.js"),
);
