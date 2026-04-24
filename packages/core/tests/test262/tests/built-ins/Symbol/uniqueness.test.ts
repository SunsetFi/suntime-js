import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "uniqueness.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/uniqueness.js"),
);
