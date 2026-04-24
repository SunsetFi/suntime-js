import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("getOwnPropertyDescriptors", () => {
it("exception-not-object-coercible.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/exception-not-object-coercible.js"));
it("function-length.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/function-length.js"));
it("function-name.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/function-name.js"));
it("function-property-descriptor.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/function-property-descriptor.js"));
it("inherited-properties-omitted.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/inherited-properties-omitted.js"));
it("normal-object.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/normal-object.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/not-a-constructor.js"));
it("observable-operations.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/observable-operations.js"));
it("order-after-define-property.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/order-after-define-property.js"));
it("primitive-booleans.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-booleans.js"));
it("primitive-numbers.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-numbers.js"));
it("primitive-strings.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-strings.js"));
it("primitive-symbols.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-symbols.js"));
it("proxy-no-ownkeys-returned-keys-order.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/proxy-no-ownkeys-returned-keys-order.js"));
it("proxy-undefined-descriptor.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/proxy-undefined-descriptor.js"));
it("symbols-included.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/symbols-included.js"));
it("tamper-with-global-object.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/tamper-with-global-object.js"));
it("tamper-with-object-keys.js", createTestHandler("built-ins/Object/getOwnPropertyDescriptors/tamper-with-object-keys.js"));
});
