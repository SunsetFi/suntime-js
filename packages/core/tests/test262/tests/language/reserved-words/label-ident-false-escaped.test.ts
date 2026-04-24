import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "label-ident-false-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/reserved-words/label-ident-false-escaped.js"),
);
