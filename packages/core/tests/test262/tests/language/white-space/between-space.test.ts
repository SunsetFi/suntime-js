import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-space.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/between-space.js"),
);
