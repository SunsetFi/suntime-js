import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("Symbol.toStringTag.js", createTestHandler("built-ins/ShadowRealm/prototype/Symbol.toStringTag.js"));
describe("evaluate", () => {
it("descriptor.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/descriptor.js"));
});
describe("evaluate", () => {
it("errors-from-the-other-realm-is-wrapped-into-a-typeerror.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/errors-from-the-other-realm-is-wrapped-into-a-typeerror.js"));
});
describe("evaluate", () => {
it("globalthis-available-properties.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/globalthis-available-properties.js"));
});
describe("evaluate", () => {
it("globalthis-config-only-properties.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/globalthis-config-only-properties.js"));
});
describe("evaluate", () => {
it("globalthis-ordinary-object.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/globalthis-ordinary-object.js"));
});
describe("evaluate", () => {
it("length.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/length.js"));
});
describe("evaluate", () => {
it("name.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/name.js"));
});
describe("evaluate", () => {
it("nested-realms.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/nested-realms.js"));
});
describe("evaluate", () => {
it("no-conditional-strict-mode.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/no-conditional-strict-mode.js"));
});
describe("evaluate", () => {
it("not-constructor.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/not-constructor.js"));
});
describe("evaluate", () => {
it("proto.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/proto.js"));
});
describe("evaluate", () => {
it("returns-primitive-values.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/returns-primitive-values.js"));
});
describe("evaluate", () => {
it("returns-proxy-callable-object.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/returns-proxy-callable-object.js"));
});
describe("evaluate", () => {
it("returns-symbol-values.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/returns-symbol-values.js"));
});
describe("evaluate", () => {
it("throws-error-from-ctor-realm.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/throws-error-from-ctor-realm.js"));
});
describe("evaluate", () => {
it("throws-syntaxerror-on-bad-syntax.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/throws-syntaxerror-on-bad-syntax.js"));
});
describe("evaluate", () => {
it("throws-typeerror-if-evaluation-resolves-to-non-primitive.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/throws-typeerror-if-evaluation-resolves-to-non-primitive.js"));
});
describe("evaluate", () => {
it("throws-typeerror-wrap-throwing.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/throws-typeerror-wrap-throwing.js"));
});
describe("evaluate", () => {
it("throws-when-argument-is-not-a-string.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/throws-when-argument-is-not-a-string.js"));
});
describe("evaluate", () => {
it("validates-realm-object.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/validates-realm-object.js"));
});
describe("evaluate", () => {
it("wrapped-function-arguments-are-wrapped-into-the-inner-realm-extended.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-arguments-are-wrapped-into-the-inner-realm-extended.js"));
});
describe("evaluate", () => {
it("wrapped-function-arguments-are-wrapped-into-the-inner-realm.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-arguments-are-wrapped-into-the-inner-realm.js"));
});
describe("evaluate", () => {
it("wrapped-function-from-return-values-share-no-identity.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-from-return-values-share-no-identity.js"));
});
describe("evaluate", () => {
it("wrapped-function-multiple-different-realms-nested.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-multiple-different-realms-nested.js"));
});
describe("evaluate", () => {
it("wrapped-function-multiple-different-realms.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-multiple-different-realms.js"));
});
describe("evaluate", () => {
it("wrapped-function-observing-their-scopes.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-observing-their-scopes.js"));
});
describe("evaluate", () => {
it("wrapped-function-proto-from-caller-realm.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-proto-from-caller-realm.js"));
});
describe("evaluate", () => {
it("wrapped-function-proxied-observes-boundary.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-proxied-observes-boundary.js"));
});
describe("evaluate", () => {
it("wrapped-function-throws-typeerror-from-caller-realm.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-from-caller-realm.js"));
});
describe("evaluate", () => {
it("wrapped-function-throws-typeerror-on-exceptional-exit.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-on-exceptional-exit.js"));
});
describe("evaluate", () => {
it("wrapped-function-throws-typeerror-on-non-primitive-arguments.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-on-non-primitive-arguments.js"));
});
describe("evaluate", () => {
it("wrapped-function-throws-typeerror-on-non-primitive-returns.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-on-non-primitive-returns.js"));
});
describe("evaluate", () => {
it("wrapped-functions-accepts-callable-objects.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-accepts-callable-objects.js"));
});
describe("evaluate", () => {
it("wrapped-functions-can-resolve-callable-returns.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-can-resolve-callable-returns.js"));
});
describe("evaluate", () => {
it("wrapped-functions-new-wrapping-on-each-evaluation.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-new-wrapping-on-each-evaluation.js"));
});
describe("evaluate", () => {
it("wrapped-functions-share-no-properties-extended.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-share-no-properties-extended.js"));
});
describe("evaluate", () => {
it("wrapped-functions-share-no-properties.js", createTestHandler("built-ins/ShadowRealm/prototype/evaluate/wrapped-functions-share-no-properties.js"));
});
describe("importValue", () => {
it("descriptor.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/descriptor.js"));
});
describe("importValue", () => {
it("import-value.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/import-value.js"));
});
describe("importValue", () => {
it("length.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/length.js"));
});
describe("importValue", () => {
it("name.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/name.js"));
});
describe("importValue", () => {
it("not-constructor.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/not-constructor.js"));
});
describe("importValue", () => {
it("proto.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/proto.js"));
});
describe("importValue", () => {
it("specifier-tostring.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/specifier-tostring.js"));
});
describe("importValue", () => {
it("throws-if-exportname-not-string.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/throws-if-exportname-not-string.js"));
});
describe("importValue", () => {
it("throws-if-import-value-does-not-exist.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/throws-if-import-value-does-not-exist.js"));
});
describe("importValue", () => {
it("throws-typeerror-import-syntax-error.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/throws-typeerror-import-syntax-error.js"));
});
describe("importValue", () => {
it("throws-typeerror-import-throws.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/throws-typeerror-import-throws.js"));
});
describe("importValue", () => {
it("validates-realm-object.js", createTestHandler("built-ins/ShadowRealm/prototype/importValue/validates-realm-object.js"));
});
it("proto.js", createTestHandler("built-ins/ShadowRealm/prototype/proto.js"));
});
