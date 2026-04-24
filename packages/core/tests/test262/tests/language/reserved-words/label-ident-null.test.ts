import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "label-ident-null.js",
  { tags: ["known-failing"] },
  createTestHandler("language/reserved-words/label-ident-null.js"),
);
