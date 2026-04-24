import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-6.1.0.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-unicode-6.1.0.js"),
);
