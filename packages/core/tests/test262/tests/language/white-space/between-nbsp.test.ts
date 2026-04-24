import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "between-nbsp.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/between-nbsp.js"),
);
