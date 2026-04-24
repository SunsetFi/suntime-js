import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "is-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/is-a-constructor.js"),
);
