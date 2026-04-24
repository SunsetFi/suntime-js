import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.2.3_A2.3_T4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/global/S10.2.3_A2.3_T4.js"),
);
