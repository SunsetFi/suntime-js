import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-digits-via-escape-hex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/part-digits-via-escape-hex.js"),
);
