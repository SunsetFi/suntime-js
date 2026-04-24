import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("setPrototypeOf", () => {
it("call-parameters.js", createTestHandler("built-ins/Proxy/setPrototypeOf/call-parameters.js"));
it("internals-call-order.js", createTestHandler("built-ins/Proxy/setPrototypeOf/internals-call-order.js"));
it("not-extensible-target-not-same-target-prototype.js", createTestHandler("built-ins/Proxy/setPrototypeOf/not-extensible-target-not-same-target-prototype.js"));
it("not-extensible-target-same-target-prototype.js", createTestHandler("built-ins/Proxy/setPrototypeOf/not-extensible-target-same-target-prototype.js"));
it("null-handler.js", createTestHandler("built-ins/Proxy/setPrototypeOf/null-handler.js"));
it("return-abrupt-from-get-trap.js", createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-get-trap.js"));
it("return-abrupt-from-isextensible-target.js", createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-isextensible-target.js"));
it("return-abrupt-from-target-getprototypeof.js", createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-target-getprototypeof.js"));
it("return-abrupt-from-trap.js", createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-trap.js"));
it("toboolean-trap-result-false.js", createTestHandler("built-ins/Proxy/setPrototypeOf/toboolean-trap-result-false.js"));
it("toboolean-trap-result-true-target-is-extensible.js", createTestHandler("built-ins/Proxy/setPrototypeOf/toboolean-trap-result-true-target-is-extensible.js"));
it("trap-is-missing-target-is-proxy.js", createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-missing-target-is-proxy.js"));
it("trap-is-not-callable-realm.js", createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-not-callable-realm.js"));
it("trap-is-not-callable.js", createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-not-callable.js"));
it("trap-is-null-target-is-proxy.js", createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-null-target-is-proxy.js"));
it("trap-is-undefined-or-null.js", createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-undefined-or-null.js"));
it("trap-is-undefined-target-is-proxy.js", createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-undefined-target-is-proxy.js"));
});
