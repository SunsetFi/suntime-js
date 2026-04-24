import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-form-feed.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/string-form-feed.js"),
);
