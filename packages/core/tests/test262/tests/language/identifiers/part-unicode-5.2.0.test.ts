import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-unicode-5.2.0.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/part-unicode-5.2.0.js"),
);
