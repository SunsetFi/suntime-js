import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "bigint.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/typeof/bigint.js"),
);

it(
  "boolean.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/boolean.js"),
);

it(
  "built-in-exotic-objects-no-call.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/typeof/built-in-exotic-objects-no-call.js"),
);

it(
  "built-in-functions.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/built-in-functions.js"),
);

it(
  "built-in-ordinary-objects-no-call.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/built-in-ordinary-objects-no-call.js"),
);

it(
  "get-value-ref-err.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/get-value-ref-err.js"),
);

it(
  "get-value.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/get-value.js"),
);

it(
  "native-call.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/typeof/native-call.js"),
);

it(
  "null.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/typeof/null.js"),
);

it(
  "number.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/number.js"),
);

it(
  "proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/proxy.js"),
);

it(
  "string.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/typeof/string.js"),
);

it(
  "symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/symbol.js"),
);

it(
  "syntax.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/syntax.js"),
);

it(
  "undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/undefined.js"),
);

it(
  "unresolvable-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/typeof/unresolvable-reference.js"),
);
