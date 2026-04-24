import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("match-indices", () => {
it("indices-array-element.js", createTestHandler("built-ins/RegExp/match-indices/indices-array-element.js"));
it("indices-array-matched.js", createTestHandler("built-ins/RegExp/match-indices/indices-array-matched.js"));
it("indices-array-non-unicode-match.js", createTestHandler("built-ins/RegExp/match-indices/indices-array-non-unicode-match.js"));
it("indices-array-properties.js", createTestHandler("built-ins/RegExp/match-indices/indices-array-properties.js"));
it("indices-array-unicode-match.js", createTestHandler("built-ins/RegExp/match-indices/indices-array-unicode-match.js"));
it("indices-array-unicode-property-names.js", createTestHandler("built-ins/RegExp/match-indices/indices-array-unicode-property-names.js"));
it("indices-array-unmatched.js", createTestHandler("built-ins/RegExp/match-indices/indices-array-unmatched.js"));
it("indices-array.js", createTestHandler("built-ins/RegExp/match-indices/indices-array.js"));
it("indices-groups-object-undefined.js", createTestHandler("built-ins/RegExp/match-indices/indices-groups-object-undefined.js"));
it("indices-groups-object-unmatched.js", createTestHandler("built-ins/RegExp/match-indices/indices-groups-object-unmatched.js"));
it("indices-groups-object.js", createTestHandler("built-ins/RegExp/match-indices/indices-groups-object.js"));
it("indices-groups-properties.js", createTestHandler("built-ins/RegExp/match-indices/indices-groups-properties.js"));
it("indices-property.js", createTestHandler("built-ins/RegExp/match-indices/indices-property.js"));
it("no-indices-array.js", createTestHandler("built-ins/RegExp/match-indices/no-indices-array.js"));
});
