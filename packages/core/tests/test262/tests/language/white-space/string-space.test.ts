import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-space.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/string-space.js"),
);
