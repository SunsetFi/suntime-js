import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-iterator-close-after-add-failure.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Set/set-iterator-close-after-add-failure.js"),
);
