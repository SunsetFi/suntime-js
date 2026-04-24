import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "newtarget-or-active-function-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Iterator/newtarget-or-active-function-object.js"),
);
