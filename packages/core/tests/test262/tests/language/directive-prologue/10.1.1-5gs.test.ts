import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.1.1-5gs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/10.1.1-5gs.js"),
);
