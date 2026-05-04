import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "tostring-2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/tostring-2.js"),
);
