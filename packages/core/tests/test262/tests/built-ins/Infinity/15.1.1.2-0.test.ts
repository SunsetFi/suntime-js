import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.1.1.2-0.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Infinity/15.1.1.2-0.js"),
);
