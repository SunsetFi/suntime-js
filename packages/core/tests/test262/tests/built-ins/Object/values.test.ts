import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("values", () => {
it("exception-during-enumeration.js", createTestHandler("built-ins/Object/values/exception-during-enumeration.js"));
it("exception-not-object-coercible.js", createTestHandler("built-ins/Object/values/exception-not-object-coercible.js"));
it("function-length.js", createTestHandler("built-ins/Object/values/function-length.js"));
it("function-name.js", createTestHandler("built-ins/Object/values/function-name.js"));
it("function-property-descriptor.js", createTestHandler("built-ins/Object/values/function-property-descriptor.js"));
it("getter-adding-key.js", createTestHandler("built-ins/Object/values/getter-adding-key.js"));
it("getter-making-future-key-nonenumerable.js", createTestHandler("built-ins/Object/values/getter-making-future-key-nonenumerable.js"));
it("getter-removing-future-key.js", createTestHandler("built-ins/Object/values/getter-removing-future-key.js"));
it("inherited-properties-omitted.js", createTestHandler("built-ins/Object/values/inherited-properties-omitted.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Object/values/not-a-constructor.js"));
it("observable-operations.js", createTestHandler("built-ins/Object/values/observable-operations.js"));
it("order-after-define-property.js", createTestHandler("built-ins/Object/values/order-after-define-property.js"));
it("primitive-booleans.js", createTestHandler("built-ins/Object/values/primitive-booleans.js"));
it("primitive-numbers.js", createTestHandler("built-ins/Object/values/primitive-numbers.js"));
it("primitive-strings.js", createTestHandler("built-ins/Object/values/primitive-strings.js"));
it("primitive-symbols.js", createTestHandler("built-ins/Object/values/primitive-symbols.js"));
it("return-order.js", createTestHandler("built-ins/Object/values/return-order.js"));
it("symbols-omitted.js", createTestHandler("built-ins/Object/values/symbols-omitted.js"));
it("tamper-with-global-object.js", createTestHandler("built-ins/Object/values/tamper-with-global-object.js"));
it("tamper-with-object-keys.js", createTestHandler("built-ins/Object/values/tamper-with-object-keys.js"));
});
