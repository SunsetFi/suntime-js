import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "position-invalid.js",
  { tags: ["known-failing"] },
  createTestHandler("language/rest-parameters/position-invalid.js"),
);
