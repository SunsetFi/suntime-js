import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.3.5-1gs.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/15.3.5-1gs.js"),
);
