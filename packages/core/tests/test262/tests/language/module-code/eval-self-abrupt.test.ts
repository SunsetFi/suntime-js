import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-self-abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-self-abrupt.js"),
);
