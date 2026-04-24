import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arrow-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/rest-parameters/arrow-function.js"),
);
