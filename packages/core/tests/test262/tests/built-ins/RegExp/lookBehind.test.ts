import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("lookBehind", () => {
it("alternations.js", createTestHandler("built-ins/RegExp/lookBehind/alternations.js"));
it("back-references-to-captures.js", createTestHandler("built-ins/RegExp/lookBehind/back-references-to-captures.js"));
it("back-references.js", createTestHandler("built-ins/RegExp/lookBehind/back-references.js"));
it("captures-negative.js", createTestHandler("built-ins/RegExp/lookBehind/captures-negative.js"));
it("captures.js", createTestHandler("built-ins/RegExp/lookBehind/captures.js"));
it("do-not-backtrack.js", createTestHandler("built-ins/RegExp/lookBehind/do-not-backtrack.js"));
it("greedy-loop.js", createTestHandler("built-ins/RegExp/lookBehind/greedy-loop.js"));
it("misc.js", createTestHandler("built-ins/RegExp/lookBehind/misc.js"));
it("mutual-recursive.js", createTestHandler("built-ins/RegExp/lookBehind/mutual-recursive.js"));
it("negative.js", createTestHandler("built-ins/RegExp/lookBehind/negative.js"));
it("nested-lookaround.js", createTestHandler("built-ins/RegExp/lookBehind/nested-lookaround.js"));
it("simple-fixed-length.js", createTestHandler("built-ins/RegExp/lookBehind/simple-fixed-length.js"));
it("sliced-strings.js", createTestHandler("built-ins/RegExp/lookBehind/sliced-strings.js"));
it("start-of-line.js", createTestHandler("built-ins/RegExp/lookBehind/start-of-line.js"));
it("sticky.js", createTestHandler("built-ins/RegExp/lookBehind/sticky.js"));
it("variable-length.js", createTestHandler("built-ins/RegExp/lookBehind/variable-length.js"));
it("word-boundary.js", createTestHandler("built-ins/RegExp/lookBehind/word-boundary.js"));
});
