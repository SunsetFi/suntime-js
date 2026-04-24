import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-local-bndng-gen.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/instn-local-bndng-gen.js"),
);
