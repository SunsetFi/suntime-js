import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-new-target.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-new-target.js"),
);
