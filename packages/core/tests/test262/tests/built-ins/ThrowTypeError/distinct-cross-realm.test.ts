import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "distinct-cross-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ThrowTypeError/distinct-cross-realm.js"),
);
