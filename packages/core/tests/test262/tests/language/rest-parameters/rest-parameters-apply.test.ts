import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "rest-parameters-apply.js",
  { tags: ["known-failing"] },
  createTestHandler("language/rest-parameters/rest-parameters-apply.js"),
);
