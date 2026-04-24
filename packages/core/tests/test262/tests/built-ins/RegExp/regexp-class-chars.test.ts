import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "regexp-class-chars.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/regexp-class-chars.js"),
);
