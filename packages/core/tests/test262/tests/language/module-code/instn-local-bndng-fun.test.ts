import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-local-bndng-fun.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-local-bndng-fun.js"),
);
