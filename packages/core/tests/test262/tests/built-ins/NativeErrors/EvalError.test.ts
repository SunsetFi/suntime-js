import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/constructor.js"),
);

it(
  "instance-proto.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/instance-proto.js"),
);

it(
  "is-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/is-a-constructor.js"),
);

it(
  "is-error-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/is-error-object.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/name.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/prop-desc.js"),
);

it(
  "proto-from-ctor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/proto-from-ctor-realm.js"),
);

it(
  "proto.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/proto.js"),
);

describe("prototype", () => {
  it(
    "constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/EvalError/prototype/constructor.js"),
  );
  it(
    "message.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/EvalError/prototype/message.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/EvalError/prototype/name.js"),
  );
  it(
    "not-error-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/EvalError/prototype/not-error-object.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/EvalError/prototype/proto.js"),
  );
});

it(
  "prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/EvalError/prototype.js"),
);
