import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.5.5.5.2-1-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/15.5.5.5.2-1-1.js"),
);
