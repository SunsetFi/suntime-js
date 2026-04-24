import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("groupBy", () => {
it("callback-arg.js", createTestHandler("built-ins/Map/groupBy/callback-arg.js"));
it("callback-throws.js", createTestHandler("built-ins/Map/groupBy/callback-throws.js"));
it("emptyList.js", createTestHandler("built-ins/Map/groupBy/emptyList.js"));
it("evenOdd.js", createTestHandler("built-ins/Map/groupBy/evenOdd.js"));
it("groupLength.js", createTestHandler("built-ins/Map/groupBy/groupLength.js"));
it("invalid-callback.js", createTestHandler("built-ins/Map/groupBy/invalid-callback.js"));
it("invalid-iterable.js", createTestHandler("built-ins/Map/groupBy/invalid-iterable.js"));
it("iterator-next-throws.js", createTestHandler("built-ins/Map/groupBy/iterator-next-throws.js"));
it("length.js", createTestHandler("built-ins/Map/groupBy/length.js"));
it("map-instance.js", createTestHandler("built-ins/Map/groupBy/map-instance.js"));
it("name.js", createTestHandler("built-ins/Map/groupBy/name.js"));
it("negativeZero.js", createTestHandler("built-ins/Map/groupBy/negativeZero.js"));
it("string.js", createTestHandler("built-ins/Map/groupBy/string.js"));
it("toPropertyKey.js", createTestHandler("built-ins/Map/groupBy/toPropertyKey.js"));
});
