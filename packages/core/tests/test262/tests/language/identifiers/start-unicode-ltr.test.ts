import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-unicode-ltr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/start-unicode-ltr.js"),
);
