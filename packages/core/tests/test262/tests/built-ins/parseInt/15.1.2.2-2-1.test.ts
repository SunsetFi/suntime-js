import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.1.2.2-2-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/parseInt/15.1.2.2-2-1.js"),
);
