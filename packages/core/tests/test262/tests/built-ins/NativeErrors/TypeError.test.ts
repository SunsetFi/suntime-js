import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/constructor.js"),
);

it(
  "instance-proto.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/instance-proto.js"),
);

it(
  "is-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/is-a-constructor.js"),
);

it(
  "is-error-object.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/is-error-object.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/name.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/prop-desc.js"),
);

it(
  "proto-from-ctor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/proto-from-ctor-realm.js"),
);

it(
  "proto.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/proto.js"),
);

describe("prototype", () => {
  it(
    "constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/TypeError/prototype/constructor.js"),
  );
  it(
    "message.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/TypeError/prototype/message.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/TypeError/prototype/name.js"),
  );
  it(
    "not-error-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/TypeError/prototype/not-error-object.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/TypeError/prototype/proto.js"),
  );
});

it(
  "prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/TypeError/prototype.js"),
);
