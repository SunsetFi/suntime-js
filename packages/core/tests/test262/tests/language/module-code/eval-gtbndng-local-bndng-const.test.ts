import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-gtbndng-local-bndng-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/eval-gtbndng-local-bndng-const.js"),
);
