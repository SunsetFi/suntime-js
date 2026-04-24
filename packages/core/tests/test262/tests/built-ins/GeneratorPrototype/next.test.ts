import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("next", () => {
it("consecutive-yields.js", createTestHandler("built-ins/GeneratorPrototype/next/consecutive-yields.js"));
it("context-method-invocation.js", createTestHandler("built-ins/GeneratorPrototype/next/context-method-invocation.js"));
it("from-state-executing.js", createTestHandler("built-ins/GeneratorPrototype/next/from-state-executing.js"));
it("length.js", createTestHandler("built-ins/GeneratorPrototype/next/length.js"));
it("lone-return.js", createTestHandler("built-ins/GeneratorPrototype/next/lone-return.js"));
it("lone-yield.js", createTestHandler("built-ins/GeneratorPrototype/next/lone-yield.js"));
it("name.js", createTestHandler("built-ins/GeneratorPrototype/next/name.js"));
it("no-control-flow.js", createTestHandler("built-ins/GeneratorPrototype/next/no-control-flow.js"));
it("not-a-constructor.js", createTestHandler("built-ins/GeneratorPrototype/next/not-a-constructor.js"));
it("property-descriptor.js", createTestHandler("built-ins/GeneratorPrototype/next/property-descriptor.js"));
it("result-prototype.js", createTestHandler("built-ins/GeneratorPrototype/next/result-prototype.js"));
it("return-yield-expr.js", createTestHandler("built-ins/GeneratorPrototype/next/return-yield-expr.js"));
it("this-val-not-generator.js", createTestHandler("built-ins/GeneratorPrototype/next/this-val-not-generator.js"));
it("this-val-not-object.js", createTestHandler("built-ins/GeneratorPrototype/next/this-val-not-object.js"));
});
