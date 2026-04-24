import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "super-prop-arrow.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/super-prop-arrow.js"),
);
