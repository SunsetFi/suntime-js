import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("throw", () => {
it("from-state-completed.js", createTestHandler("built-ins/GeneratorPrototype/throw/from-state-completed.js"));
it("from-state-executing.js", createTestHandler("built-ins/GeneratorPrototype/throw/from-state-executing.js"));
it("from-state-suspended-start.js", createTestHandler("built-ins/GeneratorPrototype/throw/from-state-suspended-start.js"));
it("length.js", createTestHandler("built-ins/GeneratorPrototype/throw/length.js"));
it("name.js", createTestHandler("built-ins/GeneratorPrototype/throw/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/GeneratorPrototype/throw/not-a-constructor.js"));
it("property-descriptor.js", createTestHandler("built-ins/GeneratorPrototype/throw/property-descriptor.js"));
it("this-val-not-generator.js", createTestHandler("built-ins/GeneratorPrototype/throw/this-val-not-generator.js"));
it("this-val-not-object.js", createTestHandler("built-ins/GeneratorPrototype/throw/this-val-not-object.js"));
it("try-catch-before-try.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-catch-before-try.js"));
it("try-catch-following-catch.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-catch-following-catch.js"));
it("try-catch-within-catch.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-catch-within-catch.js"));
it("try-catch-within-try.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-catch-within-try.js"));
it("try-finally-before-try.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-before-try.js"));
it("try-finally-following-finally.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-following-finally.js"));
it("try-finally-nested-try-catch-within-catch.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-nested-try-catch-within-catch.js"));
it("try-finally-nested-try-catch-within-finally.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-nested-try-catch-within-finally.js"));
it("try-finally-nested-try-catch-within-inner-try.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-nested-try-catch-within-inner-try.js"));
it("try-finally-nested-try-catch-within-outer-try-after-nested.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-nested-try-catch-within-outer-try-after-nested.js"));
it("try-finally-nested-try-catch-within-outer-try-before-nested.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-nested-try-catch-within-outer-try-before-nested.js"));
it("try-finally-within-finally.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-within-finally.js"));
it("try-finally-within-try.js", createTestHandler("built-ins/GeneratorPrototype/throw/try-finally-within-try.js"));
});
