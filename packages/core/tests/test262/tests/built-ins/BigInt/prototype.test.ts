import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/BigInt/prototype/Symbol.toStringTag.js"),
  );
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/BigInt/prototype/constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/BigInt/prototype/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/BigInt/prototype/proto.js"),
  );
  describe("toLocaleString", () => {
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toLocaleString/not-a-constructor.js"),
    );
  });
  describe("toString", () => {
    it(
      "a-z.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/a-z.js"),
    );
    it(
      "default-radix.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/default-radix.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/prop-desc.js"),
    );
    it(
      "prototype-call.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/prototype-call.js"),
    );
    it(
      "radix-2-to-36.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/radix-2-to-36.js"),
    );
    it(
      "radix-err.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/radix-err.js"),
    );
    it(
      "string-is-code-units-of-decimal-digits-only.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/BigInt/prototype/toString/string-is-code-units-of-decimal-digits-only.js",
      ),
    );
    it(
      "thisbigintvalue-not-valid-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/toString/thisbigintvalue-not-valid-throws.js"),
    );
  });
  describe("valueOf", () => {
    it(
      "cross-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/valueOf/cross-realm.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/valueOf/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/valueOf/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/valueOf/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/valueOf/prop-desc.js"),
    );
    it(
      "return.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/valueOf/return.js"),
    );
    it(
      "this-value-invalid-object-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/BigInt/prototype/valueOf/this-value-invalid-object-throws.js"),
    );
    it(
      "this-value-invalid-primitive-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/BigInt/prototype/valueOf/this-value-invalid-primitive-throws.js",
      ),
    );
  });
});
