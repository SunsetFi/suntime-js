import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.4.3-1-60gs.js",
  { tags: ["known-failing"] },
  createTestHandler("language/function-code/10.4.3-1-60gs.js"),
);
