import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "json-extensibility-array.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-extensibility-array.js"),
);

it(
  "json-extensibility-object.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-extensibility-object.js"),
);

it.skip("json-idempotency.js", () => {
  /* Ignored Test */
});

it(
  "json-invalid.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-invalid.js"),
);

it(
  "json-named-bindings.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-named-bindings.js"),
);

it(
  "json-value-array.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-value-array.js"),
);

it(
  "json-value-boolean.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-value-boolean.js"),
);

it(
  "json-value-null.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-value-null.js"),
);

it(
  "json-value-number.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-value-number.js"),
);

it(
  "json-value-object.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-value-object.js"),
);

it(
  "json-value-string.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-value-string.js"),
);

it(
  "json-via-namespace.js",
  { tags: ["known-failing"] },
  createTestHandler("language/import/import-attributes/json-via-namespace.js"),
);
