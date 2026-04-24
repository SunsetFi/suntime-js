import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.3.2.1-11-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/15.3.2.1-11-1.js"),
);
