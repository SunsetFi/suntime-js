import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "other_id_start-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/other_id_start-escaped.js"),
);
