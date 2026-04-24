import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "expected-argument-count.js",
  { tags: ["known-failing"] },
  createTestHandler("language/rest-parameters/expected-argument-count.js"),
);
