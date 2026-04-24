import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.4.3-1-12-s.js",
  { tags: ["known-failing"] },
  createTestHandler("language/function-code/10.4.3-1-12-s.js"),
);
