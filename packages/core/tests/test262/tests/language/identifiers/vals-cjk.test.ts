import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "vals-cjk.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/vals-cjk.js"),
);
