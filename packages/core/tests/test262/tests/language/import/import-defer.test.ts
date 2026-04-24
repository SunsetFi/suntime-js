import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("import-defer", () => {
describe("deferred-namespace-object", () => {
it("exotic-object-behavior.js", createTestHandler("language/import/import-defer/deferred-namespace-object/exotic-object-behavior.js"));
});
describe("deferred-namespace-object", () => {
it("identity.js", createTestHandler("language/import/import-defer/deferred-namespace-object/identity.js"));
});
describe("deferred-namespace-object", () => {
it("to-string-tag.js", createTestHandler("language/import/import-defer/deferred-namespace-object/to-string-tag.js"));
});
describe("errors", () => {
describe("get-other-while-dep-evaluating", () => {
it("main.js", createTestHandler("language/import/import-defer/errors/get-other-while-dep-evaluating/main.js"));
});
});
describe("errors", () => {
describe("get-other-while-dep-evaluating-async", () => {
it("main.js", createTestHandler("language/import/import-defer/errors/get-other-while-dep-evaluating-async/main.js"));
});
});
describe("errors", () => {
describe("get-other-while-evaluating", () => {
it("main.js", createTestHandler("language/import/import-defer/errors/get-other-while-evaluating/main.js"));
});
});
describe("errors", () => {
describe("get-other-while-evaluating-async", () => {
it("main.js", createTestHandler("language/import/import-defer/errors/get-other-while-evaluating-async/main.js"));
});
});
describe("errors", () => {
describe("get-self-while-defer-evaluating", () => {
it("main.js", createTestHandler("language/import/import-defer/errors/get-self-while-defer-evaluating/main.js"));
});
});
describe("errors", () => {
describe("get-self-while-evaluating-async", () => {
it("main.js", createTestHandler("language/import/import-defer/errors/get-self-while-evaluating-async/main.js"));
});
});
describe("errors", () => {
it("get-self-while-evaluating.js", createTestHandler("language/import/import-defer/errors/get-self-while-evaluating.js"));
});
describe("errors", () => {
describe("module-throws", () => {
it("defer-import-after-evaluation.js", createTestHandler("language/import/import-defer/errors/module-throws/defer-import-after-evaluation.js"));
});
});
describe("errors", () => {
describe("module-throws", () => {
it("third-party-evaluation-after-defer-import.js", createTestHandler("language/import/import-defer/errors/module-throws/third-party-evaluation-after-defer-import.js"));
});
});
describe("errors", () => {
describe("module-throws", () => {
it("trigger-evaluation.js", createTestHandler("language/import/import-defer/errors/module-throws/trigger-evaluation.js"));
});
});
describe("errors", () => {
describe("resolution-error", () => {
it("import-defer-of-missing-module-fails.js", createTestHandler("language/import/import-defer/errors/resolution-error/import-defer-of-missing-module-fails.js"));
});
});
describe("errors", () => {
describe("syntax-error", () => {
it("import-defer-of-syntax-error-fails.js", createTestHandler("language/import/import-defer/errors/syntax-error/import-defer-of-syntax-error-fails.js"));
});
});
describe("evaluation-sync", () => {
it("import-defer-does-not-evaluate.js", createTestHandler("language/import/import-defer/evaluation-sync/import-defer-does-not-evaluate.js"));
});
describe("evaluation-sync", () => {
it("module-imported-defer-and-eager.js", createTestHandler("language/import/import-defer/evaluation-sync/module-imported-defer-and-eager.js"));
});
describe("evaluation-top-level-await", () => {
describe("flattening-order", () => {
it("main.js", createTestHandler("language/import/import-defer/evaluation-top-level-await/flattening-order/main.js"));
});
});
describe("evaluation-top-level-await", () => {
describe("import-defer-async-module", () => {
it("main.js", createTestHandler("language/import/import-defer/evaluation-top-level-await/import-defer-async-module/main.js"));
});
});
describe("evaluation-top-level-await", () => {
describe("import-defer-transitive-async-module", () => {
it("main.js", createTestHandler("language/import/import-defer/evaluation-top-level-await/import-defer-transitive-async-module/main.js"));
});
});
describe("evaluation-top-level-await", () => {
describe("sync-dependency-of-deferred-async-module", () => {
it("main.js", createTestHandler("language/import/import-defer/evaluation-top-level-await/sync-dependency-of-deferred-async-module/main.js"));
});
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-defineOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-defineOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-delete.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-delete.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-get-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-get-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-getOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-getOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-hasProperty-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-hasProperty-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-hasProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-hasProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-super-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-super-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-exported-then-super-property-define.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-exported-then-super-property-define.js"));
});
describe("evaluation-triggers", () => {
it("ignore-getPrototypeOf.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-getPrototypeOf.js"));
});
describe("evaluation-triggers", () => {
it("ignore-isExtensible.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-isExtensible.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-defineOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-defineOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-delete.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-delete.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-get-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-get-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-getOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-getOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-hasProperty-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-hasProperty-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-hasProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-hasProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-super-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-super-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-not-exported-then-super-property-define.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-not-exported-then-super-property-define.js"));
});
describe("evaluation-triggers", () => {
it("ignore-preventExtensions.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-preventExtensions.js"));
});
describe("evaluation-triggers", () => {
it("ignore-private-name-access.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-private-name-access.js"));
});
describe("evaluation-triggers", () => {
it("ignore-set-string-exported.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-set-string-exported.js"));
});
describe("evaluation-triggers", () => {
it("ignore-set-string-not-exported.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-set-string-not-exported.js"));
});
describe("evaluation-triggers", () => {
it("ignore-setPrototypeOf.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-setPrototypeOf.js"));
});
describe("evaluation-triggers", () => {
it("ignore-super-property-set-exported.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-super-property-set-exported.js"));
});
describe("evaluation-triggers", () => {
it("ignore-super-property-set-not-exported.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-super-property-set-not-exported.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-defineOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-defineOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-delete.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-delete.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-get-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-get-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-getOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-getOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-hasProperty-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-hasProperty-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-hasProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-hasProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-super-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-super-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-other-super-property-define.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-other-super-property-define.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-defineOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-defineOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-delete.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-delete.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-get-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-get-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-getOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-getOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-hasProperty-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-hasProperty-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-hasProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-hasProperty.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-super-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-super-get.js"));
});
describe("evaluation-triggers", () => {
it("ignore-symbol-toStringTag-super-property-define.js", createTestHandler("language/import/import-defer/evaluation-triggers/ignore-symbol-toStringTag-super-property-define.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-defineOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-defineOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-delete.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-delete.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-get-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-get-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-get.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-getOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-getOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-hasProperty-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-hasProperty-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-hasProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-hasProperty.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-super-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-super-get.js"));
});
describe("evaluation-triggers", () => {
it("trigger-exported-string-super-property-define.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-exported-string-super-property-define.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-defineOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-defineOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-delete.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-delete.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-get-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-get-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-get.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-getOwnProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-getOwnProperty.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-hasProperty-in-prototype.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-hasProperty-in-prototype.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-hasProperty.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-hasProperty.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-super-get.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-super-get.js"));
});
describe("evaluation-triggers", () => {
it("trigger-not-exported-string-super-property-define.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-not-exported-string-super-property-define.js"));
});
describe("evaluation-triggers", () => {
it("trigger-ownPropertyKey-names.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-ownPropertyKey-names.js"));
});
describe("evaluation-triggers", () => {
it("trigger-ownPropertyKeys-symbols.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-ownPropertyKeys-symbols.js"));
});
describe("evaluation-triggers", () => {
it("trigger-ownPropertyKeys.js", createTestHandler("language/import/import-defer/evaluation-triggers/trigger-ownPropertyKeys.js"));
});
describe("syntax", () => {
it("import-attributes.js", createTestHandler("language/import/import-defer/syntax/import-attributes.js"));
});
describe("syntax", () => {
it("invalid-default-and-defer-namespace.js", createTestHandler("language/import/import-defer/syntax/invalid-default-and-defer-namespace.js"));
});
describe("syntax", () => {
it("invalid-defer-as-with-no-asterisk.js", createTestHandler("language/import/import-defer/syntax/invalid-defer-as-with-no-asterisk.js"));
});
describe("syntax", () => {
it("invalid-defer-default-and-namespace.js", createTestHandler("language/import/import-defer/syntax/invalid-defer-default-and-namespace.js"));
});
describe("syntax", () => {
it("invalid-defer-default.js", createTestHandler("language/import/import-defer/syntax/invalid-defer-default.js"));
});
describe("syntax", () => {
it("invalid-defer-named.js", createTestHandler("language/import/import-defer/syntax/invalid-defer-named.js"));
});
describe("syntax", () => {
it("invalid-export-defer-namespace.js", createTestHandler("language/import/import-defer/syntax/invalid-export-defer-namespace.js"));
});
describe("syntax", () => {
it("valid-default-binding-named-defer.js", createTestHandler("language/import/import-defer/syntax/valid-default-binding-named-defer.js"));
});
describe("syntax", () => {
it("valid-defer-namespace.js", createTestHandler("language/import/import-defer/syntax/valid-defer-namespace.js"));
});
});
