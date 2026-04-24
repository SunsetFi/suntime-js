import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "desc-to-string.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/desc-to-string.js"),
);
