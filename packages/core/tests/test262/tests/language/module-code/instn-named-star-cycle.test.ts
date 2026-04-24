import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-named-star-cycle.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-named-star-cycle.js"),
);
