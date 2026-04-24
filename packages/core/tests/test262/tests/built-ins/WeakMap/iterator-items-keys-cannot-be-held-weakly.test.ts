import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-items-keys-cannot-be-held-weakly.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/iterator-items-keys-cannot-be-held-weakly.js"),
);
