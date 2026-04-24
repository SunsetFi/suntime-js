import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "negative-bytelength-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/negative-bytelength-throws.js"),
);
