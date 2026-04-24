import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "undefined-newtarget-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/undefined-newtarget-throws.js"),
);
