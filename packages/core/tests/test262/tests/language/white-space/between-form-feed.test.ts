import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-form-feed.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/between-form-feed.js"),
);
