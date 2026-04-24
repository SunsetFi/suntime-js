import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("withResolvers", () => {
  it(
    "ctx-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/withResolvers/ctx-ctor.js"),
  );
  it(
    "ctx-non-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/withResolvers/ctx-non-ctor.js"),
  );
  it(
    "ctx-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/withResolvers/ctx-non-object.js"),
  );
  it(
    "promise.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/withResolvers/promise.js"),
  );
  it(
    "resolvers.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/withResolvers/resolvers.js"),
  );
  it(
    "result.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/withResolvers/result.js"),
  );
});
