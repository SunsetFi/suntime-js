import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("entries", () => {
it("exception-during-enumeration.js", createTestHandler("built-ins/Object/entries/exception-during-enumeration.js"));
it("exception-not-object-coercible.js", createTestHandler("built-ins/Object/entries/exception-not-object-coercible.js"));
it("function-length.js", createTestHandler("built-ins/Object/entries/function-length.js"));
it("function-name.js", createTestHandler("built-ins/Object/entries/function-name.js"));
it("function-property-descriptor.js", createTestHandler("built-ins/Object/entries/function-property-descriptor.js"));
it("getter-adding-key.js", createTestHandler("built-ins/Object/entries/getter-adding-key.js"));
it("getter-making-future-key-nonenumerable.js", createTestHandler("built-ins/Object/entries/getter-making-future-key-nonenumerable.js"));
it("getter-removing-future-key.js", createTestHandler("built-ins/Object/entries/getter-removing-future-key.js"));
it("inherited-properties-omitted.js", createTestHandler("built-ins/Object/entries/inherited-properties-omitted.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Object/entries/not-a-constructor.js"));
it("observable-operations.js", createTestHandler("built-ins/Object/entries/observable-operations.js"));
it("order-after-define-property-with-function.js", createTestHandler("built-ins/Object/entries/order-after-define-property-with-function.js"));
it("order-after-define-property.js", createTestHandler("built-ins/Object/entries/order-after-define-property.js"));
it("primitive-booleans.js", createTestHandler("built-ins/Object/entries/primitive-booleans.js"));
it("primitive-numbers.js", createTestHandler("built-ins/Object/entries/primitive-numbers.js"));
it("primitive-strings.js", createTestHandler("built-ins/Object/entries/primitive-strings.js"));
it("primitive-symbols.js", createTestHandler("built-ins/Object/entries/primitive-symbols.js"));
it("return-order.js", createTestHandler("built-ins/Object/entries/return-order.js"));
it("symbols-omitted.js", createTestHandler("built-ins/Object/entries/symbols-omitted.js"));
it("tamper-with-global-object.js", createTestHandler("built-ins/Object/entries/tamper-with-global-object.js"));
it("tamper-with-object-keys.js", createTestHandler("built-ins/Object/entries/tamper-with-object-keys.js"));
});
