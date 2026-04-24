import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("getOwnPropertyDescriptor", () => {
it("call-parameters.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/call-parameters.js"));
it("null-handler.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/null-handler.js"));
it("result-is-undefined-target-is-not-extensible.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/result-is-undefined-target-is-not-extensible.js"));
it("result-is-undefined-targetdesc-is-not-configurable.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/result-is-undefined-targetdesc-is-not-configurable.js"));
it("result-is-undefined-targetdesc-is-undefined.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/result-is-undefined-targetdesc-is-undefined.js"));
it("result-is-undefined.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/result-is-undefined.js"));
it("result-type-is-not-object-nor-undefined-realm.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/result-type-is-not-object-nor-undefined-realm.js"));
it("result-type-is-not-object-nor-undefined.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/result-type-is-not-object-nor-undefined.js"));
it("resultdesc-is-invalid-descriptor.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/resultdesc-is-invalid-descriptor.js"));
it("resultdesc-is-not-configurable-not-writable-targetdesc-is-writable.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/resultdesc-is-not-configurable-not-writable-targetdesc-is-writable.js"));
it("resultdesc-is-not-configurable-targetdesc-is-configurable.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/resultdesc-is-not-configurable-targetdesc-is-configurable.js"));
it("resultdesc-is-not-configurable-targetdesc-is-undefined.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/resultdesc-is-not-configurable-targetdesc-is-undefined.js"));
it("resultdesc-return-configurable.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/resultdesc-return-configurable.js"));
it("resultdesc-return-not-configurable.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/resultdesc-return-not-configurable.js"));
it("return-is-abrupt.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/return-is-abrupt.js"));
it("trap-is-missing-target-is-proxy.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/trap-is-missing-target-is-proxy.js"));
it("trap-is-not-callable-realm.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/trap-is-not-callable-realm.js"));
it("trap-is-not-callable.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/trap-is-not-callable.js"));
it("trap-is-null-target-is-proxy.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/trap-is-null-target-is-proxy.js"));
it("trap-is-undefined-target-is-proxy.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/trap-is-undefined-target-is-proxy.js"));
it("trap-is-undefined.js", createTestHandler("built-ins/Proxy/getOwnPropertyDescriptor/trap-is-undefined.js"));
});
