import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/not-callable.js"),
);
