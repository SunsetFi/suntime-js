import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vertical-tilde-continue-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/vertical-tilde-continue-escaped.js"),
);
