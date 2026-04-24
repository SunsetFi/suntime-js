import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-nbsp.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/string-nbsp.js"),
);
