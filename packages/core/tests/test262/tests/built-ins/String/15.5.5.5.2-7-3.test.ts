import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.5.5.5.2-7-3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/15.5.5.5.2-7-3.js"),
);
