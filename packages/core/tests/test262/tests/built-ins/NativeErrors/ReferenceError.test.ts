import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ReferenceError", () => {
  it(
    "constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/constructor.js"),
  );
  it(
    "instance-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/instance-proto.js"),
  );
  it(
    "is-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/is-a-constructor.js"),
  );
  it(
    "is-error-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/is-error-object.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/prop-desc.js"),
  );
  it(
    "proto-from-ctor-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/proto-from-ctor-realm.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/proto.js"),
  );
  describe("prototype", () => {
    it(
      "constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/constructor.js"),
    );
    it(
      "message.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/message.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/name.js"),
    );
    it(
      "not-error-object.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/not-error-object.js"),
    );
    it(
      "proto.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/proto.js"),
    );
  });
  it(
    "prototype.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/ReferenceError/prototype.js"),
  );
});
