import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "super-call-arrow.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/super-call-arrow.js"),
);
