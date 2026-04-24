import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("preventExtensions", () => {
it("call-parameters.js", createTestHandler("built-ins/Proxy/preventExtensions/call-parameters.js"));
it("null-handler.js", createTestHandler("built-ins/Proxy/preventExtensions/null-handler.js"));
it("return-false.js", createTestHandler("built-ins/Proxy/preventExtensions/return-false.js"));
it("return-is-abrupt.js", createTestHandler("built-ins/Proxy/preventExtensions/return-is-abrupt.js"));
it("return-true-target-is-extensible.js", createTestHandler("built-ins/Proxy/preventExtensions/return-true-target-is-extensible.js"));
it("return-true-target-is-not-extensible.js", createTestHandler("built-ins/Proxy/preventExtensions/return-true-target-is-not-extensible.js"));
it("trap-is-missing-target-is-proxy.js", createTestHandler("built-ins/Proxy/preventExtensions/trap-is-missing-target-is-proxy.js"));
it("trap-is-not-callable-realm.js", createTestHandler("built-ins/Proxy/preventExtensions/trap-is-not-callable-realm.js"));
it("trap-is-not-callable.js", createTestHandler("built-ins/Proxy/preventExtensions/trap-is-not-callable.js"));
it("trap-is-null-target-is-proxy.js", createTestHandler("built-ins/Proxy/preventExtensions/trap-is-null-target-is-proxy.js"));
it("trap-is-undefined-target-is-proxy.js", createTestHandler("built-ins/Proxy/preventExtensions/trap-is-undefined-target-is-proxy.js"));
it("trap-is-undefined.js", createTestHandler("built-ins/Proxy/preventExtensions/trap-is-undefined.js"));
});
