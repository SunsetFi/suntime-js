import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-from-newtarget-abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakRef/prototype-from-newtarget-abrupt.js"),
);
