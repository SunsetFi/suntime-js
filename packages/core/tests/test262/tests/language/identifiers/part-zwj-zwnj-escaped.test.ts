import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "part-zwj-zwnj-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifiers/part-zwj-zwnj-escaped.js"),
);
