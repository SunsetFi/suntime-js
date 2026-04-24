import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-11.0.0-class.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-unicode-11.0.0-class.js"),
);
