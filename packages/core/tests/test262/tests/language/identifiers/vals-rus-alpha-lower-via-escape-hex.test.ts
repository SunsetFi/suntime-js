import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vals-rus-alpha-lower-via-escape-hex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/vals-rus-alpha-lower-via-escape-hex.js"),
);
