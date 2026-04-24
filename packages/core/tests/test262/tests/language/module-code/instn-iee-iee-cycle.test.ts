import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-iee-iee-cycle.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-iee-iee-cycle.js"),
);
