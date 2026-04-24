import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("import.meta", () => {
it("distinct-for-each-module.js", createTestHandler("language/expressions/import.meta/distinct-for-each-module.js"));
it("import-meta-is-an-ordinary-object.js", createTestHandler("language/expressions/import.meta/import-meta-is-an-ordinary-object.js"));
it("not-accessible-from-direct-eval.js", createTestHandler("language/expressions/import.meta/not-accessible-from-direct-eval.js"));
it("same-object-returned.js", createTestHandler("language/expressions/import.meta/same-object-returned.js"));
describe("syntax", () => {
it("escape-sequence-import.js", createTestHandler("language/expressions/import.meta/syntax/escape-sequence-import.js"));
});
describe("syntax", () => {
it("escape-sequence-meta.js", createTestHandler("language/expressions/import.meta/syntax/escape-sequence-meta.js"));
});
describe("syntax", () => {
it("goal-async-function-params-or-body.js", createTestHandler("language/expressions/import.meta/syntax/goal-async-function-params-or-body.js"));
});
describe("syntax", () => {
it("goal-async-generator-params-or-body.js", createTestHandler("language/expressions/import.meta/syntax/goal-async-generator-params-or-body.js"));
});
describe("syntax", () => {
it("goal-function-params-or-body.js", createTestHandler("language/expressions/import.meta/syntax/goal-function-params-or-body.js"));
});
describe("syntax", () => {
it("goal-generator-params-or-body.js", createTestHandler("language/expressions/import.meta/syntax/goal-generator-params-or-body.js"));
});
describe("syntax", () => {
it("goal-module-nested-function.js", createTestHandler("language/expressions/import.meta/syntax/goal-module-nested-function.js"));
});
describe("syntax", () => {
it("goal-module.js", createTestHandler("language/expressions/import.meta/syntax/goal-module.js"));
});
describe("syntax", () => {
it("goal-script.js", createTestHandler("language/expressions/import.meta/syntax/goal-script.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-array-destructuring-expr.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-array-destructuring-expr.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-array-rest-destructuring-expr.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-array-rest-destructuring-expr.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-assignment-expr.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-assignment-expr.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-for-await-of-loop.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-for-await-of-loop.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-for-in-loop.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-for-in-loop.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-for-of-loop.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-for-of-loop.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-object-destructuring-expr.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-object-destructuring-expr.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-object-rest-destructuring-expr.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-object-rest-destructuring-expr.js"));
});
describe("syntax", () => {
it("invalid-assignment-target-update-expr.js", createTestHandler("language/expressions/import.meta/syntax/invalid-assignment-target-update-expr.js"));
});
});
