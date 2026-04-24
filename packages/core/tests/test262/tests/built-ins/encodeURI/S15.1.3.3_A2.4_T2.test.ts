import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.3.3_A2.4_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/encodeURI/S15.1.3.3_A2.4_T2.js"),
);
