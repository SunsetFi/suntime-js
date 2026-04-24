import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "internal-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/internal-prototype.js"),
);
