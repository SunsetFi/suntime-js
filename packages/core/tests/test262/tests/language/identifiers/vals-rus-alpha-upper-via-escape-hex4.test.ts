import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vals-rus-alpha-upper-via-escape-hex4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/vals-rus-alpha-upper-via-escape-hex4.js"),
);
