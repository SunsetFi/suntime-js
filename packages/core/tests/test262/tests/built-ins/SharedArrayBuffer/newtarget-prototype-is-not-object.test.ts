import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "newtarget-prototype-is-not-object.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/newtarget-prototype-is-not-object.js"),
);
