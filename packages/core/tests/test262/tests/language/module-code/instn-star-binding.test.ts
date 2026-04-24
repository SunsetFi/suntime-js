import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-star-binding.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-star-binding.js"),
);
