import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "other_id_continue-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/other_id_continue-escaped.js"),
);
