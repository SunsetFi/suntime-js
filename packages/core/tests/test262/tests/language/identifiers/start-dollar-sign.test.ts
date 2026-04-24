import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-dollar-sign.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/start-dollar-sign.js"),
);
