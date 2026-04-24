import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "add-not-callable-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakSet/add-not-callable-throws.js"),
);
