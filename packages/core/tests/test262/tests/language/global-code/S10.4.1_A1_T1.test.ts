import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.4.1_A1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/S10.4.1_A1_T1.js"),
);
