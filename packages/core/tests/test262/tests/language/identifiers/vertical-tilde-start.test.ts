import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vertical-tilde-start.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/vertical-tilde-start.js"),
);
