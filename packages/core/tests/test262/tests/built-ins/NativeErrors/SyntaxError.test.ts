import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("SyntaxError", () => {
  it(
    "constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/constructor.js"),
  );
  it(
    "instance-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/instance-proto.js"),
  );
  it(
    "is-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/is-a-constructor.js"),
  );
  it(
    "is-error-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/is-error-object.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/prop-desc.js"),
  );
  it(
    "proto-from-ctor-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/proto-from-ctor-realm.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/proto.js"),
  );
  describe("prototype", () => {
    it(
      "constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/constructor.js"),
    );
    it(
      "message.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/message.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/name.js"),
    );
    it(
      "not-error-object.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/not-error-object.js"),
    );
    it(
      "proto.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/proto.js"),
    );
  });
  it(
    "prototype.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/NativeErrors/SyntaxError/prototype.js"),
  );
});
