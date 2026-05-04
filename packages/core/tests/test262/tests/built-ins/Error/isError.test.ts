import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "bigints.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Error/isError/bigints.js"),
);

it(
  "error-subclass.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/isError/error-subclass.js"),
);

it(
  "errors-other-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Error/isError/errors-other-realm.js"),
);

it(
  "errors.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/isError/errors.js"),
);

it(
  "fake-errors.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/isError/fake-errors.js"),
);

it(
  "is-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/isError/is-a-constructor.js"),
);

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Error/isError/name.js"));

it(
  "non-error-objects-other-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Error/isError/non-error-objects-other-realm.js"),
);

it(
  "non-error-objects.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Error/isError/non-error-objects.js"),
);

it(
  "primitives.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/isError/primitives.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/isError/prop-desc.js"),
);

it(
  "symbols.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/isError/symbols.js"),
);
