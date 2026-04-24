import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-gtbndng-local-bndng-const.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-gtbndng-local-bndng-const.js"),
);
