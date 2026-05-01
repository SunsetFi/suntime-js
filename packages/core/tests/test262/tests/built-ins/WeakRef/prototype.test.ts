import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Symbol.toStringTag.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakRef/prototype/Symbol.toStringTag.js"),
);

it(
  "constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakRef/prototype/constructor.js"),
);

describe("deref", () => {
  it(
    "custom-this.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/custom-this.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/prop-desc.js"),
  );
  it(
    "return-object-target.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/return-object-target.js"),
  );
  it(
    "return-symbol-target.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/return-symbol-target.js"),
  );
  it(
    "this-does-not-have-internal-target-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/WeakRef/prototype/deref/this-does-not-have-internal-target-throws.js",
    ),
  );
  it(
    "this-not-object-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakRef/prototype/deref/this-not-object-throws.js"),
  );
});

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakRef/prototype/prop-desc.js"),
);

it(
  "proto.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakRef/prototype/proto.js"),
);
