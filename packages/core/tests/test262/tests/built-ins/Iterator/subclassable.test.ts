import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "subclassable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/subclassable.js"),
);
