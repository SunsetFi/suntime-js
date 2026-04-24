import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-digits.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/part-digits.js"),
);
