import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-unicode-17.0.0.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/part-unicode-17.0.0.js"),
);
