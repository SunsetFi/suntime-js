import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/constructor.js"),
);

it(
  "instance-proto.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/instance-proto.js"),
);

it(
  "is-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/is-a-constructor.js"),
);

it(
  "is-error-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/is-error-object.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/name.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/prop-desc.js"),
);

it(
  "proto-from-ctor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/URIError/proto-from-ctor-realm.js"),
);

it(
  "proto.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/NativeErrors/URIError/proto.js"),
);

describe("prototype", () => {
  it(
    "constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/URIError/prototype/constructor.js"),
  );
  it(
    "message.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/URIError/prototype/message.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/URIError/prototype/name.js"),
  );
  it(
    "not-error-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/URIError/prototype/not-error-object.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/URIError/prototype/proto.js"),
  );
});

it(
  "prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/URIError/prototype.js"),
);
