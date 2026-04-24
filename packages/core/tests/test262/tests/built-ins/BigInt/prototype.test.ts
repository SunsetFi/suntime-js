import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("Symbol.toStringTag.js", createTestHandler("built-ins/BigInt/prototype/Symbol.toStringTag.js"));
it("constructor.js", createTestHandler("built-ins/BigInt/prototype/constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/BigInt/prototype/prop-desc.js"));
it("proto.js", createTestHandler("built-ins/BigInt/prototype/proto.js"));
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/BigInt/prototype/toLocaleString/not-a-constructor.js"));
});
describe("toString", () => {
it("a-z.js", createTestHandler("built-ins/BigInt/prototype/toString/a-z.js"));
it("default-radix.js", createTestHandler("built-ins/BigInt/prototype/toString/default-radix.js"));
it("length.js", createTestHandler("built-ins/BigInt/prototype/toString/length.js"));
it("name.js", createTestHandler("built-ins/BigInt/prototype/toString/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/BigInt/prototype/toString/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/BigInt/prototype/toString/prop-desc.js"));
it("prototype-call.js", createTestHandler("built-ins/BigInt/prototype/toString/prototype-call.js"));
it("radix-2-to-36.js", createTestHandler("built-ins/BigInt/prototype/toString/radix-2-to-36.js"));
it("radix-err.js", createTestHandler("built-ins/BigInt/prototype/toString/radix-err.js"));
it("string-is-code-units-of-decimal-digits-only.js", createTestHandler("built-ins/BigInt/prototype/toString/string-is-code-units-of-decimal-digits-only.js"));
it("thisbigintvalue-not-valid-throws.js", createTestHandler("built-ins/BigInt/prototype/toString/thisbigintvalue-not-valid-throws.js"));
});
describe("valueOf", () => {
it("cross-realm.js", createTestHandler("built-ins/BigInt/prototype/valueOf/cross-realm.js"));
it("length.js", createTestHandler("built-ins/BigInt/prototype/valueOf/length.js"));
it("name.js", createTestHandler("built-ins/BigInt/prototype/valueOf/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/BigInt/prototype/valueOf/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/BigInt/prototype/valueOf/prop-desc.js"));
it("return.js", createTestHandler("built-ins/BigInt/prototype/valueOf/return.js"));
it("this-value-invalid-object-throws.js", createTestHandler("built-ins/BigInt/prototype/valueOf/this-value-invalid-object-throws.js"));
it("this-value-invalid-primitive-throws.js", createTestHandler("built-ins/BigInt/prototype/valueOf/this-value-invalid-primitive-throws.js"));
});
});
