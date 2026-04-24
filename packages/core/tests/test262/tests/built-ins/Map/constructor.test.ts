import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/constructor.js"),
);
