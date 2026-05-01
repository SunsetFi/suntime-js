import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cross-realm.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/hasInstance/cross-realm.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/hasInstance/prop-desc.js"),
);
