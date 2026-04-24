import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-newtarget.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-newtarget.js"),
);
