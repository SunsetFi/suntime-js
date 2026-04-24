import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "object-pattern.js",
  { tags: ["known-passing"] },
  createTestHandler("language/rest-parameters/object-pattern.js"),
);
