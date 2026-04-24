import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "14.1-12-s.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/14.1-12-s.js"),
);
