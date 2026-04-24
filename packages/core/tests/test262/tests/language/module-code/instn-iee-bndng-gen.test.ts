import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-iee-bndng-gen.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-iee-bndng-gen.js"),
);
