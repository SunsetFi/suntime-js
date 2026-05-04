import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/constructor.js"),
);

it(
  "instance-proto.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/instance-proto.js"),
);

it(
  "is-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/is-a-constructor.js"),
);

it(
  "is-error-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/is-error-object.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/name.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/prop-desc.js"),
);

it(
  "proto-from-ctor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/proto-from-ctor-realm.js"),
);

it(
  "proto.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/proto.js"),
);

describe("prototype", () => {
  it(
    "constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/RangeError/prototype/constructor.js"),
  );
  it(
    "message.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/RangeError/prototype/message.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/RangeError/prototype/name.js"),
  );
  it(
    "not-error-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/RangeError/prototype/not-error-object.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/RangeError/prototype/proto.js"),
  );
});

it(
  "prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/RangeError/prototype.js"),
);
