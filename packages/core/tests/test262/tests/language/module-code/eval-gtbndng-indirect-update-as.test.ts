import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-gtbndng-indirect-update-as.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-gtbndng-indirect-update-as.js"),
);
