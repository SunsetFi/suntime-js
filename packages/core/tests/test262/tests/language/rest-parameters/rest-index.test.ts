import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "rest-index.js",
  { tags: ["known-failing"] },
  createTestHandler("language/rest-parameters/rest-index.js"),
);
