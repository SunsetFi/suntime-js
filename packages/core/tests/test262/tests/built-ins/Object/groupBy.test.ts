import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "callback-arg.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/callback-arg.js"),
);

it(
  "callback-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/callback-throws.js"),
);

it(
  "emptyList.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/emptyList.js"),
);

it(
  "evenOdd.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/evenOdd.js"),
);

it(
  "groupLength.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/groupLength.js"),
);

it(
  "invalid-callback.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/groupBy/invalid-callback.js"),
);

it(
  "invalid-iterable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/groupBy/invalid-iterable.js"),
);

it(
  "invalid-property-key.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/invalid-property-key.js"),
);

it(
  "iterator-next-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/iterator-next-throws.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/length.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Object/groupBy/name.js"));

it(
  "null-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/null-prototype.js"),
);

it(
  "string.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/string.js"),
);

it(
  "toPropertyKey.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/groupBy/toPropertyKey.js"),
);
