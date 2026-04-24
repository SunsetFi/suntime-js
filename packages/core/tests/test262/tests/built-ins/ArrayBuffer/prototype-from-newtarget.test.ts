import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-from-newtarget.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayBuffer/prototype-from-newtarget.js"),
);
