import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "label-ident-false.js",
  { tags: ["known-failing"] },
  createTestHandler("language/reserved-words/label-ident-false.js"),
);
