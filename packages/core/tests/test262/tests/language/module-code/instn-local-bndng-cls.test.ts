import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-local-bndng-cls.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/instn-local-bndng-cls.js"),
);
