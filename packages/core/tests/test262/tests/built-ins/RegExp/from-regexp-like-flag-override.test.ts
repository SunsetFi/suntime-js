import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "from-regexp-like-flag-override.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/from-regexp-like-flag-override.js"),
);
