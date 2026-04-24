import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-12.0.0.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/start-unicode-12.0.0.js"),
);
