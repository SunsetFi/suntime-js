import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-local-bndng-for-dup.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-local-bndng-for-dup.js"),
);
