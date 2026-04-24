import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("setPrototypeOf", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/not-a-constructor.js"),
  );
  it(
    "proto-is-not-object-and-not-null-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Reflect/setPrototypeOf/proto-is-not-object-and-not-null-throws.js",
    ),
  );
  it(
    "proto-is-symbol-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/proto-is-symbol-throws.js"),
  );
  it(
    "return-abrupt-from-result.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/return-abrupt-from-result.js"),
  );
  it(
    "return-false-if-target-and-proto-are-the-same.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Reflect/setPrototypeOf/return-false-if-target-and-proto-are-the-same.js",
    ),
  );
  it(
    "return-false-if-target-is-not-extensible.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Reflect/setPrototypeOf/return-false-if-target-is-not-extensible.js",
    ),
  );
  it(
    "return-false-if-target-is-prototype-of-proto.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Reflect/setPrototypeOf/return-false-if-target-is-prototype-of-proto.js",
    ),
  );
  it(
    "return-true-if-new-prototype-is-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/return-true-if-new-prototype-is-set.js"),
  );
  it(
    "return-true-if-proto-is-current.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/return-true-if-proto-is-current.js"),
  );
  it(
    "setPrototypeOf.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/setPrototypeOf.js"),
  );
  it(
    "target-is-not-object-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/target-is-not-object-throws.js"),
  );
  it(
    "target-is-symbol-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/setPrototypeOf/target-is-symbol-throws.js"),
  );
});
