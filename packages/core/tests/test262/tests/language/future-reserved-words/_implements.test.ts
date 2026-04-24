import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "_implements.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/_implements.js"),
);
