import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/parseFloat/not-a-constructor.js"),
);
