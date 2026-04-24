import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arguments-caller.js",
  { tags: ["known-failing"] },
  createTestHandler("language/arguments-object/arguments-caller.js"),
);
