import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("try", () => {
  it("args.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Promise/try/args.js"));
  it(
    "ctx-ctor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/ctx-ctor-throws.js"),
  );
  it(
    "ctx-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/ctx-ctor.js"),
  );
  it(
    "ctx-non-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Promise/try/ctx-non-ctor.js"),
  );
  it(
    "ctx-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Promise/try/ctx-non-object.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Promise/try/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/not-a-constructor.js"),
  );
  it(
    "promise.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/promise.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/prop-desc.js"),
  );
  it(
    "return-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/return-value.js"),
  );
  it(
    "throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/try/throws.js"),
  );
});
