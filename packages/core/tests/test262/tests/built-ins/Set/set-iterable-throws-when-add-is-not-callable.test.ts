import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-iterable-throws-when-add-is-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/set-iterable-throws-when-add-is-not-callable.js"),
);
