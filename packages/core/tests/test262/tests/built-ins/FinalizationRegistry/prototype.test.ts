import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("Symbol.toStringTag.js", createTestHandler("built-ins/FinalizationRegistry/prototype/Symbol.toStringTag.js"));
it("constructor.js", createTestHandler("built-ins/FinalizationRegistry/prototype/constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/FinalizationRegistry/prototype/prop-desc.js"));
it("proto.js", createTestHandler("built-ins/FinalizationRegistry/prototype/proto.js"));
describe("register", () => {
it("custom-this.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/custom-this.js"));
});
describe("register", () => {
it("heldValue-same-as-target.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/heldValue-same-as-target.js"));
});
describe("register", () => {
it("holdings-any-value-type.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/holdings-any-value-type.js"));
});
describe("register", () => {
it("length.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/length.js"));
});
describe("register", () => {
it("name.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/name.js"));
});
describe("register", () => {
it("not-a-constructor.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/not-a-constructor.js"));
});
describe("register", () => {
it("prop-desc.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/prop-desc.js"));
});
describe("register", () => {
it("return-undefined-register-itself.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/return-undefined-register-itself.js"));
});
describe("register", () => {
it("return-undefined-register-object.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/return-undefined-register-object.js"));
});
describe("register", () => {
it("return-undefined-register-symbol.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/return-undefined-register-symbol.js"));
});
describe("register", () => {
it("this-does-not-have-internal-target-throws.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/this-does-not-have-internal-target-throws.js"));
});
describe("register", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/this-not-object-throws.js"));
});
describe("register", () => {
it("throws-when-target-cannot-be-held-weakly.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/throws-when-target-cannot-be-held-weakly.js"));
});
describe("register", () => {
it("throws-when-unregisterToken-not-undefined-and-cannot-be-held-weakly.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/throws-when-unregisterToken-not-undefined-and-cannot-be-held-weakly.js"));
});
describe("register", () => {
it("unregisterToken-same-as-holdings-and-target.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/unregisterToken-same-as-holdings-and-target.js"));
});
describe("register", () => {
it("unregisterToken-same-as-holdings.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/unregisterToken-same-as-holdings.js"));
});
describe("register", () => {
it("unregisterToken-same-as-target.js", createTestHandler("built-ins/FinalizationRegistry/prototype/register/unregisterToken-same-as-target.js"));
});
describe("unregister", () => {
it("custom-this.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/custom-this.js"));
});
describe("unregister", () => {
it("length.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/length.js"));
});
describe("unregister", () => {
it("name.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/name.js"));
});
describe("unregister", () => {
it("not-a-constructor.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/not-a-constructor.js"));
});
describe("unregister", () => {
it("prop-desc.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/prop-desc.js"));
});
describe("unregister", () => {
it("this-does-not-have-internal-cells-throws.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/this-does-not-have-internal-cells-throws.js"));
});
describe("unregister", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/this-not-object-throws.js"));
});
describe("unregister", () => {
it("throws-when-unregisterToken-cannot-be-held-weakly.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/throws-when-unregisterToken-cannot-be-held-weakly.js"));
});
describe("unregister", () => {
it("unregister-object-token.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/unregister-object-token.js"));
});
describe("unregister", () => {
it("unregister-symbol-token.js", createTestHandler("built-ins/FinalizationRegistry/prototype/unregister/unregister-symbol-token.js"));
});
});
