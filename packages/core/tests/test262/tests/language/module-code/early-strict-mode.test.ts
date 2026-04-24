import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-strict-mode.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-strict-mode.js"),
);
