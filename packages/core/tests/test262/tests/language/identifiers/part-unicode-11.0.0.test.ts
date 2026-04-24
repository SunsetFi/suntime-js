import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-unicode-11.0.0.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/part-unicode-11.0.0.js"),
);
