import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "interface-strict-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/interface-strict-escaped.js"),
);
