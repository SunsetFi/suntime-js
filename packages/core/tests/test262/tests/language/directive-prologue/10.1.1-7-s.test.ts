import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.1.1-7-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/10.1.1-7-s.js"),
);
