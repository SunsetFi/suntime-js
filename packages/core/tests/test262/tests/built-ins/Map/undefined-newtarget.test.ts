import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "undefined-newtarget.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/undefined-newtarget.js"),
);
