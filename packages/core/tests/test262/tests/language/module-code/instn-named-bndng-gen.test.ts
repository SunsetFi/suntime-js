import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-named-bndng-gen.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-named-bndng-gen.js"),
);
