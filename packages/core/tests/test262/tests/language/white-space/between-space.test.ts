import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-space.js",
  { tags: ["known-passing"] },
  createTestHandler("language/white-space/between-space.js"),
);
