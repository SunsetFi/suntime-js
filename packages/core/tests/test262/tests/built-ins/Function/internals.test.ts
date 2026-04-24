import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("internals", () => {
  describe("Call", () => {
    it(
      "class-ctor-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/internals/Call/class-ctor-realm.js"),
    );
    it(
      "class-ctor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Function/internals/Call/class-ctor.js"),
    );
  });
  describe("Construct", () => {
    it(
      "base-ctor-revoked-proxy-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/internals/Construct/base-ctor-revoked-proxy-realm.js"),
    );
    it(
      "base-ctor-revoked-proxy.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/internals/Construct/base-ctor-revoked-proxy.js"),
    );
    it(
      "derived-return-val-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/internals/Construct/derived-return-val-realm.js"),
    );
    it(
      "derived-return-val.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Function/internals/Construct/derived-return-val.js"),
    );
    it(
      "derived-this-uninitialized-realm.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/internals/Construct/derived-this-uninitialized-realm.js",
      ),
    );
    it(
      "derived-this-uninitialized.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Function/internals/Construct/derived-this-uninitialized.js"),
    );
  });
});
