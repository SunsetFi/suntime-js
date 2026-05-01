import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cross-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/unscopables/cross-realm.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/unscopables/prop-desc.js"),
);
