import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ShadowRealm/prototype/Symbol.toStringTag.js"),
  );
  describe("evaluate", () => {
    it(
      "descriptor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/descriptor.js"),
    );
    it(
      "errors-from-the-other-realm-is-wrapped-into-a-typeerror.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/errors-from-the-other-realm-is-wrapped-into-a-typeerror.js",
      ),
    );
    it(
      "globalthis-available-properties.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/globalthis-available-properties.js",
      ),
    );
    it(
      "globalthis-config-only-properties.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/globalthis-config-only-properties.js",
      ),
    );
    it(
      "globalthis-ordinary-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/globalthis-ordinary-object.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/name.js"),
    );
    it(
      "nested-realms.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/nested-realms.js"),
    );
    it(
      "no-conditional-strict-mode.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/no-conditional-strict-mode.js"),
    );
    it(
      "not-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/not-constructor.js"),
    );
    it(
      "proto.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/proto.js"),
    );
    it(
      "returns-primitive-values.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/returns-primitive-values.js"),
    );
    it(
      "returns-proxy-callable-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/returns-proxy-callable-object.js",
      ),
    );
    it(
      "returns-symbol-values.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/returns-symbol-values.js"),
    );
    it(
      "throws-error-from-ctor-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/throws-error-from-ctor-realm.js"),
    );
    it(
      "throws-syntaxerror-on-bad-syntax.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/throws-syntaxerror-on-bad-syntax.js",
      ),
    );
    it(
      "throws-typeerror-if-evaluation-resolves-to-non-primitive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/throws-typeerror-if-evaluation-resolves-to-non-primitive.js",
      ),
    );
    it(
      "throws-typeerror-wrap-throwing.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/throws-typeerror-wrap-throwing.js",
      ),
    );
    it(
      "throws-when-argument-is-not-a-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/throws-when-argument-is-not-a-string.js",
      ),
    );
    it(
      "validates-realm-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/evaluate/validates-realm-object.js"),
    );
    it(
      "wrapped-function-arguments-are-wrapped-into-the-inner-realm-extended.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-arguments-are-wrapped-into-the-inner-realm-extended.js",
      ),
    );
    it(
      "wrapped-function-arguments-are-wrapped-into-the-inner-realm.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-arguments-are-wrapped-into-the-inner-realm.js",
      ),
    );
    it(
      "wrapped-function-from-return-values-share-no-identity.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-from-return-values-share-no-identity.js",
      ),
    );
    it(
      "wrapped-function-multiple-different-realms-nested.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-multiple-different-realms-nested.js",
      ),
    );
    it(
      "wrapped-function-multiple-different-realms.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-multiple-different-realms.js",
      ),
    );
    it(
      "wrapped-function-observing-their-scopes.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-observing-their-scopes.js",
      ),
    );
    it(
      "wrapped-function-proto-from-caller-realm.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-proto-from-caller-realm.js",
      ),
    );
    it(
      "wrapped-function-proxied-observes-boundary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-proxied-observes-boundary.js",
      ),
    );
    it(
      "wrapped-function-throws-typeerror-from-caller-realm.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-from-caller-realm.js",
      ),
    );
    it(
      "wrapped-function-throws-typeerror-on-exceptional-exit.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-on-exceptional-exit.js",
      ),
    );
    it(
      "wrapped-function-throws-typeerror-on-non-primitive-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-on-non-primitive-arguments.js",
      ),
    );
    it(
      "wrapped-function-throws-typeerror-on-non-primitive-returns.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-on-non-primitive-returns.js",
      ),
    );
    it(
      "wrapped-functions-accepts-callable-objects.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-accepts-callable-objects.js",
      ),
    );
    it(
      "wrapped-functions-can-resolve-callable-returns.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-can-resolve-callable-returns.js",
      ),
    );
    it(
      "wrapped-functions-new-wrapping-on-each-evaluation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-new-wrapping-on-each-evaluation.js",
      ),
    );
    it(
      "wrapped-functions-share-no-properties-extended.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-share-no-properties-extended.js",
      ),
    );
    it(
      "wrapped-functions-share-no-properties.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-share-no-properties.js",
      ),
    );
  });
  describe("importValue", () => {
    it(
      "descriptor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/descriptor.js"),
    );
    it(
      "import-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/import-value.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/name.js"),
    );
    it(
      "not-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/not-constructor.js"),
    );
    it(
      "proto.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/proto.js"),
    );
    it(
      "specifier-tostring.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/specifier-tostring.js"),
    );
    it(
      "throws-if-exportname-not-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/importValue/throws-if-exportname-not-string.js",
      ),
    );
    it(
      "throws-if-import-value-does-not-exist.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/importValue/throws-if-import-value-does-not-exist.js",
      ),
    );
    it(
      "throws-typeerror-import-syntax-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/importValue/throws-typeerror-import-syntax-error.js",
      ),
    );
    it(
      "throws-typeerror-import-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ShadowRealm/prototype/importValue/throws-typeerror-import-throws.js",
      ),
    );
    it(
      "validates-realm-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ShadowRealm/prototype/importValue/validates-realm-object.js"),
    );
  });
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ShadowRealm/prototype/proto.js"),
  );
});
