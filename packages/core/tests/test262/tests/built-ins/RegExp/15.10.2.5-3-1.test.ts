import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.10.2.5-3-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/15.10.2.5-3-1.js"),
);
