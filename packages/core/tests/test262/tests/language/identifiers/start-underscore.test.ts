import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-underscore.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-underscore.js"),
);
