import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vals-eng-alpha-lower-via-escape-hex4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/vals-eng-alpha-lower-via-escape-hex4.js"),
);
