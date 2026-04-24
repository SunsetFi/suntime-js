import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.6-5-1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/10.6-5-1.js"),
);
