import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "create-value.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/for/create-value.js"),
);

it(
  "cross-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/for/cross-realm.js"),
);

it(
  "description.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/for/description.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Symbol/for/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Symbol/for/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/for/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/for/prop-desc.js"),
);

it(
  "retrieve-value.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/for/retrieve-value.js"),
);

it(
  "to-string-err.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/for/to-string-err.js"),
);
