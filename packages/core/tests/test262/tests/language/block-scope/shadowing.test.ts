import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("shadowing", () => {
it("catch-parameter-shadowing-catch-parameter.js", createTestHandler("language/block-scope/shadowing/catch-parameter-shadowing-catch-parameter.js"));
it("catch-parameter-shadowing-function-parameter-name.js", createTestHandler("language/block-scope/shadowing/catch-parameter-shadowing-function-parameter-name.js"));
it("catch-parameter-shadowing-let-declaration.js", createTestHandler("language/block-scope/shadowing/catch-parameter-shadowing-let-declaration.js"));
it("catch-parameter-shadowing-var-variable.js", createTestHandler("language/block-scope/shadowing/catch-parameter-shadowing-var-variable.js"));
it("const-declaration-shadowing-catch-parameter.js", createTestHandler("language/block-scope/shadowing/const-declaration-shadowing-catch-parameter.js"));
it("const-declarations-shadowing-parameter-name-let-const-and-var-variables.js", createTestHandler("language/block-scope/shadowing/const-declarations-shadowing-parameter-name-let-const-and-var-variables.js"));
it("dynamic-lookup-from-closure.js", createTestHandler("language/block-scope/shadowing/dynamic-lookup-from-closure.js"));
it("dynamic-lookup-in-and-through-block-contexts.js", createTestHandler("language/block-scope/shadowing/dynamic-lookup-in-and-through-block-contexts.js"));
it("hoisting-var-declarations-out-of-blocks.js", createTestHandler("language/block-scope/shadowing/hoisting-var-declarations-out-of-blocks.js"));
it("let-declaration-shadowing-catch-parameter.js", createTestHandler("language/block-scope/shadowing/let-declaration-shadowing-catch-parameter.js"));
it("let-declarations-shadowing-parameter-name-let-const-and-var.js", createTestHandler("language/block-scope/shadowing/let-declarations-shadowing-parameter-name-let-const-and-var.js"));
it("lookup-from-closure.js", createTestHandler("language/block-scope/shadowing/lookup-from-closure.js"));
it("lookup-in-and-through-block-contexts.js", createTestHandler("language/block-scope/shadowing/lookup-in-and-through-block-contexts.js"));
it("parameter-name-shadowing-catch-parameter.js", createTestHandler("language/block-scope/shadowing/parameter-name-shadowing-catch-parameter.js"));
it("parameter-name-shadowing-parameter-name-let-const-and-var.js", createTestHandler("language/block-scope/shadowing/parameter-name-shadowing-parameter-name-let-const-and-var.js"));
});
