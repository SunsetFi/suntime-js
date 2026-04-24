import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "super-prop-arrow.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/super-prop-arrow.js"),
);
