import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/FinalizationRegistry/prototype/Symbol.toStringTag.js"),
  );
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/FinalizationRegistry/prototype/constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/FinalizationRegistry/prototype/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/FinalizationRegistry/prototype/proto.js"),
  );
  describe("register", () => {
    it(
      "custom-this.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/register/custom-this.js"),
    );
    it(
      "heldValue-same-as-target.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/heldValue-same-as-target.js",
      ),
    );
    it(
      "holdings-any-value-type.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/holdings-any-value-type.js",
      ),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/register/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/register/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/register/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/register/prop-desc.js"),
    );
    it(
      "return-undefined-register-itself.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/return-undefined-register-itself.js",
      ),
    );
    it(
      "return-undefined-register-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/return-undefined-register-object.js",
      ),
    );
    it(
      "return-undefined-register-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/return-undefined-register-symbol.js",
      ),
    );
    it(
      "this-does-not-have-internal-target-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/this-does-not-have-internal-target-throws.js",
      ),
    );
    it(
      "this-not-object-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/this-not-object-throws.js",
      ),
    );
    it(
      "throws-when-target-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/throws-when-target-cannot-be-held-weakly.js",
      ),
    );
    it(
      "throws-when-unregisterToken-not-undefined-and-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/throws-when-unregisterToken-not-undefined-and-cannot-be-held-weakly.js",
      ),
    );
    it(
      "unregisterToken-same-as-holdings-and-target.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/unregisterToken-same-as-holdings-and-target.js",
      ),
    );
    it(
      "unregisterToken-same-as-holdings.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/unregisterToken-same-as-holdings.js",
      ),
    );
    it(
      "unregisterToken-same-as-target.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/register/unregisterToken-same-as-target.js",
      ),
    );
  });
  describe("unregister", () => {
    it(
      "custom-this.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/custom-this.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/prop-desc.js"),
    );
    it(
      "this-does-not-have-internal-cells-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/unregister/this-does-not-have-internal-cells-throws.js",
      ),
    );
    it(
      "this-not-object-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/unregister/this-not-object-throws.js",
      ),
    );
    it(
      "throws-when-unregisterToken-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/unregister/throws-when-unregisterToken-cannot-be-held-weakly.js",
      ),
    );
    it(
      "unregister-object-token.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/unregister/unregister-object-token.js",
      ),
    );
    it(
      "unregister-symbol-token.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/FinalizationRegistry/prototype/unregister/unregister-symbol-token.js",
      ),
    );
  });
});
