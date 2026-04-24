import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "returns-new-object-from-constructor-with-symbol-target.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakRef/returns-new-object-from-constructor-with-symbol-target.js"),
);
