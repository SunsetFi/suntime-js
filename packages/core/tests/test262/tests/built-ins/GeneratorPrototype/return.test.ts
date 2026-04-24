import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("return", () => {
  it(
    "from-state-completed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/from-state-completed.js"),
  );
  it(
    "from-state-executing.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/from-state-executing.js"),
  );
  it(
    "from-state-suspended-start.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/from-state-suspended-start.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/not-a-constructor.js"),
  );
  it(
    "property-descriptor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/property-descriptor.js"),
  );
  it(
    "this-val-not-generator.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/this-val-not-generator.js"),
  );
  it(
    "this-val-not-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/this-val-not-object.js"),
  );
  it(
    "try-catch-before-try.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-catch-before-try.js"),
  );
  it(
    "try-catch-following-catch.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-catch-following-catch.js"),
  );
  it(
    "try-catch-within-catch.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-catch-within-catch.js"),
  );
  it(
    "try-catch-within-try.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-catch-within-try.js"),
  );
  it(
    "try-finally-before-try.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-finally-before-try.js"),
  );
  it(
    "try-finally-following-finally.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-finally-following-finally.js"),
  );
  it(
    "try-finally-nested-try-catch-within-catch.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/GeneratorPrototype/return/try-finally-nested-try-catch-within-catch.js",
    ),
  );
  it(
    "try-finally-nested-try-catch-within-finally.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/GeneratorPrototype/return/try-finally-nested-try-catch-within-finally.js",
    ),
  );
  it(
    "try-finally-nested-try-catch-within-inner-try.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/GeneratorPrototype/return/try-finally-nested-try-catch-within-inner-try.js",
    ),
  );
  it(
    "try-finally-nested-try-catch-within-outer-try-after-nested.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/GeneratorPrototype/return/try-finally-nested-try-catch-within-outer-try-after-nested.js",
    ),
  );
  it(
    "try-finally-nested-try-catch-within-outer-try-before-nested.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/GeneratorPrototype/return/try-finally-nested-try-catch-within-outer-try-before-nested.js",
    ),
  );
  it(
    "try-finally-set-property-within-try.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-finally-set-property-within-try.js"),
  );
  it(
    "try-finally-within-finally.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-finally-within-finally.js"),
  );
  it(
    "try-finally-within-try.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/GeneratorPrototype/return/try-finally-within-try.js"),
  );
});
