import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "tostring-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Error/tostring-1.js"),
);
