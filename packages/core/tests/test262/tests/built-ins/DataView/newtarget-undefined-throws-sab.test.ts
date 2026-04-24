import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "newtarget-undefined-throws-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/newtarget-undefined-throws-sab.js"),
);
