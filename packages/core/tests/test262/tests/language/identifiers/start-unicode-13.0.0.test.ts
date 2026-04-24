import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-13.0.0.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-unicode-13.0.0.js"),
);
