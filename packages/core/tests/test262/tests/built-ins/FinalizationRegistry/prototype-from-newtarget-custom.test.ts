import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-from-newtarget-custom.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/FinalizationRegistry/prototype-from-newtarget-custom.js"),
);
