import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("groupBy", () => {
  it(
    "callback-arg.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/callback-arg.js"),
  );
  it(
    "callback-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/callback-throws.js"),
  );
  it(
    "emptyList.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/emptyList.js"),
  );
  it(
    "evenOdd.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/evenOdd.js"),
  );
  it(
    "groupLength.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/groupLength.js"),
  );
  it(
    "invalid-callback.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/invalid-callback.js"),
  );
  it(
    "invalid-iterable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/invalid-iterable.js"),
  );
  it(
    "iterator-next-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/iterator-next-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/length.js"),
  );
  it(
    "map-instance.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/map-instance.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Map/groupBy/name.js"));
  it(
    "negativeZero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/negativeZero.js"),
  );
  it(
    "string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/string.js"),
  );
  it(
    "toPropertyKey.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Map/groupBy/toPropertyKey.js"),
  );
});
