import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.6-6-2.js",
  { tags: ["known-failing"] },
  createTestHandler("language/arguments-object/10.6-6-2.js"),
);
