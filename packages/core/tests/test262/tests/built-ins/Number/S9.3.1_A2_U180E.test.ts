import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S9.3.1_A2_U180E.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/S9.3.1_A2_U180E.js"),
);
