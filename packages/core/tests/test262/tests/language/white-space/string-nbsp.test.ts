import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-nbsp.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/string-nbsp.js"),
);
