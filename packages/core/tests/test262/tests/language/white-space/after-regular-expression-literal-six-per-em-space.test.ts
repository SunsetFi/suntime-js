import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "after-regular-expression-literal-six-per-em-space.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/after-regular-expression-literal-six-per-em-space.js"),
);
