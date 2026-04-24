import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-zwj-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/start-zwj-escaped.js"),
);
