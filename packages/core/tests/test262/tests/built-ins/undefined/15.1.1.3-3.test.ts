import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.1.1.3-3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/undefined/15.1.1.3-3.js"),
);
