import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-11.0.0-class.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/start-unicode-11.0.0-class.js"),
);
