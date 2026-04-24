import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("internals", () => {
describe("Call", () => {
it("class-ctor-realm.js", createTestHandler("built-ins/Function/internals/Call/class-ctor-realm.js"));
it("class-ctor.js", createTestHandler("built-ins/Function/internals/Call/class-ctor.js"));
});
describe("Construct", () => {
it("base-ctor-revoked-proxy-realm.js", createTestHandler("built-ins/Function/internals/Construct/base-ctor-revoked-proxy-realm.js"));
it("base-ctor-revoked-proxy.js", createTestHandler("built-ins/Function/internals/Construct/base-ctor-revoked-proxy.js"));
it("derived-return-val-realm.js", createTestHandler("built-ins/Function/internals/Construct/derived-return-val-realm.js"));
it("derived-return-val.js", createTestHandler("built-ins/Function/internals/Construct/derived-return-val.js"));
it("derived-this-uninitialized-realm.js", createTestHandler("built-ins/Function/internals/Construct/derived-this-uninitialized-realm.js"));
it("derived-this-uninitialized.js", createTestHandler("built-ins/Function/internals/Construct/derived-this-uninitialized.js"));
});
});
