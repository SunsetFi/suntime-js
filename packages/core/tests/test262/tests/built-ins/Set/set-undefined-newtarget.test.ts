import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-undefined-newtarget.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-undefined-newtarget.js"),
);
