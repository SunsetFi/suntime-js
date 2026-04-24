import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-star-iee-cycle.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-star-iee-cycle.js"),
);
