import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.2.1_A2.js",
  { tags: ["known-failing"] },
  createTestHandler("language/function-code/S10.2.1_A2.js"),
);
