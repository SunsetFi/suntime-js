import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("apply", () => {
it("arguments-realm.js", createTestHandler("built-ins/Proxy/apply/arguments-realm.js"));
it("call-parameters.js", createTestHandler("built-ins/Proxy/apply/call-parameters.js"));
it("call-result.js", createTestHandler("built-ins/Proxy/apply/call-result.js"));
it("null-handler-realm.js", createTestHandler("built-ins/Proxy/apply/null-handler-realm.js"));
it("null-handler.js", createTestHandler("built-ins/Proxy/apply/null-handler.js"));
it("return-abrupt.js", createTestHandler("built-ins/Proxy/apply/return-abrupt.js"));
it("trap-is-missing-target-is-proxy.js", createTestHandler("built-ins/Proxy/apply/trap-is-missing-target-is-proxy.js"));
it("trap-is-not-callable-realm.js", createTestHandler("built-ins/Proxy/apply/trap-is-not-callable-realm.js"));
it("trap-is-not-callable.js", createTestHandler("built-ins/Proxy/apply/trap-is-not-callable.js"));
it("trap-is-null-target-is-proxy.js", createTestHandler("built-ins/Proxy/apply/trap-is-null-target-is-proxy.js"));
it("trap-is-null.js", createTestHandler("built-ins/Proxy/apply/trap-is-null.js"));
it("trap-is-undefined-no-property.js", createTestHandler("built-ins/Proxy/apply/trap-is-undefined-no-property.js"));
it("trap-is-undefined-target-is-proxy.js", createTestHandler("built-ins/Proxy/apply/trap-is-undefined-target-is-proxy.js"));
it("trap-is-undefined.js", createTestHandler("built-ins/Proxy/apply/trap-is-undefined.js"));
});
