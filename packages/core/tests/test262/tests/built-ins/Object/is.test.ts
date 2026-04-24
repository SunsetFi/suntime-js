import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("is", () => {
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Object/is/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Object/is/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-a-constructor.js"),
  );
  it(
    "not-same-value-x-y-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-boolean.js"),
  );
  it(
    "not-same-value-x-y-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-null.js"),
  );
  it(
    "not-same-value-x-y-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-number.js"),
  );
  it(
    "not-same-value-x-y-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-object.js"),
  );
  it(
    "not-same-value-x-y-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-string.js"),
  );
  it(
    "not-same-value-x-y-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-symbol.js"),
  );
  it(
    "not-same-value-x-y-type.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-type.js"),
  );
  it(
    "not-same-value-x-y-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/not-same-value-x-y-undefined.js"),
  );
  it(
    "object-is.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/object-is.js"),
  );
  it(
    "same-value-x-y-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-boolean.js"),
  );
  it(
    "same-value-x-y-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-empty.js"),
  );
  it(
    "same-value-x-y-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-null.js"),
  );
  it(
    "same-value-x-y-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-number.js"),
  );
  it(
    "same-value-x-y-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-object.js"),
  );
  it(
    "same-value-x-y-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-string.js"),
  );
  it(
    "same-value-x-y-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-symbol.js"),
  );
  it(
    "same-value-x-y-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/same-value-x-y-undefined.js"),
  );
  it(
    "symbol-object-is-same-value.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/is/symbol-object-is-same-value.js"),
  );
});
