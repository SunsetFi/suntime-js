import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-dup-lables.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-dup-lables.js"),
);
