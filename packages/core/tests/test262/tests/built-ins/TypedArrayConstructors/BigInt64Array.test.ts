import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "BYTES_PER_ELEMENT.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/TypedArrayConstructors/BigInt64Array/BYTES_PER_ELEMENT.js"),
);

it(
  "constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/TypedArrayConstructors/BigInt64Array/constructor.js"),
);

it.skip("is-a-constructor.js", () => {
  /* Ignored Test */
});

it.skip("length.js", () => {
  /* Ignored Test */
});

it(
  "name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/TypedArrayConstructors/BigInt64Array/name.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/TypedArrayConstructors/BigInt64Array/prop-desc.js"),
);

it.skip("proto.js", () => {
  /* Ignored Test */
});

describe("prototype", () => {
  it(
    "BYTES_PER_ELEMENT.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/TypedArrayConstructors/BigInt64Array/prototype/BYTES_PER_ELEMENT.js",
    ),
  );
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/TypedArrayConstructors/BigInt64Array/prototype/constructor.js"),
  );
  it(
    "not-typedarray-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/TypedArrayConstructors/BigInt64Array/prototype/not-typedarray-object.js",
    ),
  );
  it.skip("proto.js", () => {
    /* Ignored Test */
  });
});

it(
  "prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/TypedArrayConstructors/BigInt64Array/prototype.js"),
);
