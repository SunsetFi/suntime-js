import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-iee-bndng-fun.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-iee-bndng-fun.js"),
);
