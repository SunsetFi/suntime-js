import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("groupBy", () => {
it("callback-arg.js", createTestHandler("built-ins/Object/groupBy/callback-arg.js"));
it("callback-throws.js", createTestHandler("built-ins/Object/groupBy/callback-throws.js"));
it("emptyList.js", createTestHandler("built-ins/Object/groupBy/emptyList.js"));
it("evenOdd.js", createTestHandler("built-ins/Object/groupBy/evenOdd.js"));
it("groupLength.js", createTestHandler("built-ins/Object/groupBy/groupLength.js"));
it("invalid-callback.js", createTestHandler("built-ins/Object/groupBy/invalid-callback.js"));
it("invalid-iterable.js", createTestHandler("built-ins/Object/groupBy/invalid-iterable.js"));
it("invalid-property-key.js", createTestHandler("built-ins/Object/groupBy/invalid-property-key.js"));
it("iterator-next-throws.js", createTestHandler("built-ins/Object/groupBy/iterator-next-throws.js"));
it("length.js", createTestHandler("built-ins/Object/groupBy/length.js"));
it("name.js", createTestHandler("built-ins/Object/groupBy/name.js"));
it("null-prototype.js", createTestHandler("built-ins/Object/groupBy/null-prototype.js"));
it("string.js", createTestHandler("built-ins/Object/groupBy/string.js"));
it("toPropertyKey.js", createTestHandler("built-ins/Object/groupBy/toPropertyKey.js"));
});
