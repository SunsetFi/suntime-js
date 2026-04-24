import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isError", () => {
it("bigints.js", createTestHandler("built-ins/Error/isError/bigints.js"));
it("error-subclass.js", createTestHandler("built-ins/Error/isError/error-subclass.js"));
it("errors-other-realm.js", createTestHandler("built-ins/Error/isError/errors-other-realm.js"));
it("errors.js", createTestHandler("built-ins/Error/isError/errors.js"));
it("fake-errors.js", createTestHandler("built-ins/Error/isError/fake-errors.js"));
it("is-a-constructor.js", createTestHandler("built-ins/Error/isError/is-a-constructor.js"));
it("name.js", createTestHandler("built-ins/Error/isError/name.js"));
it("non-error-objects-other-realm.js", createTestHandler("built-ins/Error/isError/non-error-objects-other-realm.js"));
it("non-error-objects.js", createTestHandler("built-ins/Error/isError/non-error-objects.js"));
it("primitives.js", createTestHandler("built-ins/Error/isError/primitives.js"));
it("prop-desc.js", createTestHandler("built-ins/Error/isError/prop-desc.js"));
it("symbols.js", createTestHandler("built-ins/Error/isError/symbols.js"));
});
