import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unscopables.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifier-resolution/unscopables.js"),
);
