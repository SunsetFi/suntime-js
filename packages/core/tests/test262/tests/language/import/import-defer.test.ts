import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("import-defer", () => {
  describe("deferred-namespace-object", () => {
    it(
      "exotic-object-behavior.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/deferred-namespace-object/exotic-object-behavior.js",
      ),
    );
    it(
      "identity.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/deferred-namespace-object/identity.js"),
    );
    it(
      "to-string-tag.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/deferred-namespace-object/to-string-tag.js"),
    );
  });
  describe("errors", () => {
    describe("get-other-while-dep-evaluating", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/get-other-while-dep-evaluating/main.js",
        ),
      );
    });
    describe("get-other-while-dep-evaluating-async", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/get-other-while-dep-evaluating-async/main.js",
        ),
      );
    });
    describe("get-other-while-evaluating", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler("language/import/import-defer/errors/get-other-while-evaluating/main.js"),
      );
    });
    describe("get-other-while-evaluating-async", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/get-other-while-evaluating-async/main.js",
        ),
      );
    });
    describe("get-self-while-defer-evaluating", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/get-self-while-defer-evaluating/main.js",
        ),
      );
    });
    describe("get-self-while-evaluating-async", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/get-self-while-evaluating-async/main.js",
        ),
      );
    });
    it(
      "get-self-while-evaluating.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/errors/get-self-while-evaluating.js"),
    );
    describe("module-throws", () => {
      it(
        "defer-import-after-evaluation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/module-throws/defer-import-after-evaluation.js",
        ),
      );
      it(
        "third-party-evaluation-after-defer-import.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/module-throws/third-party-evaluation-after-defer-import.js",
        ),
      );
      it(
        "trigger-evaluation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/module-throws/trigger-evaluation.js",
        ),
      );
    });
    describe("resolution-error", () => {
      it(
        "import-defer-of-missing-module-fails.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/resolution-error/import-defer-of-missing-module-fails.js",
        ),
      );
    });
    describe("syntax-error", () => {
      it(
        "import-defer-of-syntax-error-fails.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/errors/syntax-error/import-defer-of-syntax-error-fails.js",
        ),
      );
    });
  });
  describe("evaluation-sync", () => {
    it(
      "import-defer-does-not-evaluate.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-sync/import-defer-does-not-evaluate.js",
      ),
    );
    it(
      "module-imported-defer-and-eager.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-sync/module-imported-defer-and-eager.js",
      ),
    );
  });
  describe("evaluation-top-level-await", () => {
    describe("flattening-order", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/evaluation-top-level-await/flattening-order/main.js",
        ),
      );
    });
    describe("import-defer-async-module", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/evaluation-top-level-await/import-defer-async-module/main.js",
        ),
      );
    });
    describe("import-defer-transitive-async-module", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/evaluation-top-level-await/import-defer-transitive-async-module/main.js",
        ),
      );
    });
    describe("sync-dependency-of-deferred-async-module", () => {
      it(
        "main.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/import/import-defer/evaluation-top-level-await/sync-dependency-of-deferred-async-module/main.js",
        ),
      );
    });
  });
  describe("evaluation-triggers", () => {
    it(
      "ignore-exported-then-defineOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-defineOwnProperty.js",
      ),
    );
    it(
      "ignore-exported-then-delete.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-delete.js",
      ),
    );
    it(
      "ignore-exported-then-get-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-get-in-prototype.js",
      ),
    );
    it(
      "ignore-exported-then-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-get.js",
      ),
    );
    it(
      "ignore-exported-then-getOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-getOwnProperty.js",
      ),
    );
    it(
      "ignore-exported-then-hasProperty-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-hasProperty-in-prototype.js",
      ),
    );
    it(
      "ignore-exported-then-hasProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-hasProperty.js",
      ),
    );
    it(
      "ignore-exported-then-super-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-super-get.js",
      ),
    );
    it(
      "ignore-exported-then-super-property-define.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-exported-then-super-property-define.js",
      ),
    );
    it(
      "ignore-getPrototypeOf.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-getPrototypeOf.js",
      ),
    );
    it(
      "ignore-isExtensible.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/evaluation-triggers/ignore-isExtensible.js"),
    );
    it(
      "ignore-not-exported-then-defineOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-defineOwnProperty.js",
      ),
    );
    it(
      "ignore-not-exported-then-delete.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-delete.js",
      ),
    );
    it(
      "ignore-not-exported-then-get-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-get-in-prototype.js",
      ),
    );
    it(
      "ignore-not-exported-then-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-get.js",
      ),
    );
    it(
      "ignore-not-exported-then-getOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-getOwnProperty.js",
      ),
    );
    it(
      "ignore-not-exported-then-hasProperty-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-hasProperty-in-prototype.js",
      ),
    );
    it(
      "ignore-not-exported-then-hasProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-hasProperty.js",
      ),
    );
    it(
      "ignore-not-exported-then-super-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-super-get.js",
      ),
    );
    it(
      "ignore-not-exported-then-super-property-define.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-not-exported-then-super-property-define.js",
      ),
    );
    it(
      "ignore-preventExtensions.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-preventExtensions.js",
      ),
    );
    it(
      "ignore-private-name-access.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-private-name-access.js",
      ),
    );
    it(
      "ignore-set-string-exported.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-set-string-exported.js",
      ),
    );
    it(
      "ignore-set-string-not-exported.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-set-string-not-exported.js",
      ),
    );
    it(
      "ignore-setPrototypeOf.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-setPrototypeOf.js",
      ),
    );
    it(
      "ignore-super-property-set-exported.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-super-property-set-exported.js",
      ),
    );
    it(
      "ignore-super-property-set-not-exported.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-super-property-set-not-exported.js",
      ),
    );
    it(
      "ignore-symbol-other-defineOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-defineOwnProperty.js",
      ),
    );
    it(
      "ignore-symbol-other-delete.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-delete.js",
      ),
    );
    it(
      "ignore-symbol-other-get-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-get-in-prototype.js",
      ),
    );
    it(
      "ignore-symbol-other-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-get.js",
      ),
    );
    it(
      "ignore-symbol-other-getOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-getOwnProperty.js",
      ),
    );
    it(
      "ignore-symbol-other-hasProperty-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-hasProperty-in-prototype.js",
      ),
    );
    it(
      "ignore-symbol-other-hasProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-hasProperty.js",
      ),
    );
    it(
      "ignore-symbol-other-super-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-super-get.js",
      ),
    );
    it(
      "ignore-symbol-other-super-property-define.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-other-super-property-define.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-defineOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-defineOwnProperty.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-delete.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-delete.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-get-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-get-in-prototype.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-get.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-getOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-getOwnProperty.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-hasProperty-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-hasProperty-in-prototype.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-hasProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-hasProperty.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-super-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-super-get.js",
      ),
    );
    it(
      "ignore-symbol-toStringTag-super-property-define.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-super-property-define.js",
      ),
    );
    it(
      "trigger-exported-string-defineOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-defineOwnProperty.js",
      ),
    );
    it(
      "trigger-exported-string-delete.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-delete.js",
      ),
    );
    it(
      "trigger-exported-string-get-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-get-in-prototype.js",
      ),
    );
    it(
      "trigger-exported-string-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-get.js",
      ),
    );
    it(
      "trigger-exported-string-getOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-getOwnProperty.js",
      ),
    );
    it(
      "trigger-exported-string-hasProperty-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-hasProperty-in-prototype.js",
      ),
    );
    it(
      "trigger-exported-string-hasProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-hasProperty.js",
      ),
    );
    it(
      "trigger-exported-string-super-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-super-get.js",
      ),
    );
    it(
      "trigger-exported-string-super-property-define.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-exported-string-super-property-define.js",
      ),
    );
    it(
      "trigger-not-exported-string-defineOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-defineOwnProperty.js",
      ),
    );
    it(
      "trigger-not-exported-string-delete.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-delete.js",
      ),
    );
    it(
      "trigger-not-exported-string-get-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-get-in-prototype.js",
      ),
    );
    it(
      "trigger-not-exported-string-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-get.js",
      ),
    );
    it(
      "trigger-not-exported-string-getOwnProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-getOwnProperty.js",
      ),
    );
    it(
      "trigger-not-exported-string-hasProperty-in-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-hasProperty-in-prototype.js",
      ),
    );
    it(
      "trigger-not-exported-string-hasProperty.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-hasProperty.js",
      ),
    );
    it(
      "trigger-not-exported-string-super-get.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-super-get.js",
      ),
    );
    it(
      "trigger-not-exported-string-super-property-define.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-not-exported-string-super-property-define.js",
      ),
    );
    it(
      "trigger-ownPropertyKey-names.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-ownPropertyKey-names.js",
      ),
    );
    it(
      "trigger-ownPropertyKeys-symbols.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-ownPropertyKeys-symbols.js",
      ),
    );
    it(
      "trigger-ownPropertyKeys.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/evaluation-triggers/trigger-ownPropertyKeys.js",
      ),
    );
  });
  describe("syntax", () => {
    it(
      "import-attributes.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/syntax/import-attributes.js"),
    );
    it(
      "invalid-default-and-defer-namespace.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/syntax/invalid-default-and-defer-namespace.js",
      ),
    );
    it(
      "invalid-defer-as-with-no-asterisk.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/syntax/invalid-defer-as-with-no-asterisk.js"),
    );
    it(
      "invalid-defer-default-and-namespace.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/import/import-defer/syntax/invalid-defer-default-and-namespace.js",
      ),
    );
    it(
      "invalid-defer-default.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/syntax/invalid-defer-default.js"),
    );
    it(
      "invalid-defer-named.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/syntax/invalid-defer-named.js"),
    );
    it(
      "invalid-export-defer-namespace.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/syntax/invalid-export-defer-namespace.js"),
    );
    it(
      "valid-default-binding-named-defer.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/syntax/valid-default-binding-named-defer.js"),
    );
    it(
      "valid-defer-namespace.js",
      { tags: ["known-failing"] },
      createTestHandler("language/import/import-defer/syntax/valid-defer-namespace.js"),
    );
  });
});
