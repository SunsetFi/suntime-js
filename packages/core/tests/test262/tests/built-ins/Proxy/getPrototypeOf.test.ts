import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("getPrototypeOf", () => {
it("call-parameters.js", createTestHandler("built-ins/Proxy/getPrototypeOf/call-parameters.js"));
it("extensible-target-return-handlerproto.js", createTestHandler("built-ins/Proxy/getPrototypeOf/extensible-target-return-handlerproto.js"));
it("instanceof-custom-return-accepted.js", createTestHandler("built-ins/Proxy/getPrototypeOf/instanceof-custom-return-accepted.js"));
it("instanceof-target-not-extensible-not-same-proto-throws.js", createTestHandler("built-ins/Proxy/getPrototypeOf/instanceof-target-not-extensible-not-same-proto-throws.js"));
it("not-extensible-not-same-proto-throws.js", createTestHandler("built-ins/Proxy/getPrototypeOf/not-extensible-not-same-proto-throws.js"));
it("not-extensible-same-proto.js", createTestHandler("built-ins/Proxy/getPrototypeOf/not-extensible-same-proto.js"));
it("null-handler.js", createTestHandler("built-ins/Proxy/getPrototypeOf/null-handler.js"));
it("return-is-abrupt.js", createTestHandler("built-ins/Proxy/getPrototypeOf/return-is-abrupt.js"));
it("trap-is-missing-target-is-proxy.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-missing-target-is-proxy.js"));
it("trap-is-not-callable-realm.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-not-callable-realm.js"));
it("trap-is-not-callable.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-not-callable.js"));
it("trap-is-null-target-is-proxy.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-null-target-is-proxy.js"));
it("trap-is-undefined-target-is-proxy.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-undefined-target-is-proxy.js"));
it("trap-is-undefined.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-undefined.js"));
it("trap-result-neither-object-nor-null-throws-boolean.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-boolean.js"));
it("trap-result-neither-object-nor-null-throws-number.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-number.js"));
it("trap-result-neither-object-nor-null-throws-string.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-string.js"));
it("trap-result-neither-object-nor-null-throws-symbol.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-symbol.js"));
it("trap-result-neither-object-nor-null-throws-undefined.js", createTestHandler("built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-undefined.js"));
});
