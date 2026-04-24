import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("keyFor", () => {
it("arg-non-symbol.js", createTestHandler("built-ins/Symbol/keyFor/arg-non-symbol.js"));
it("arg-symbol-registry-hit.js", createTestHandler("built-ins/Symbol/keyFor/arg-symbol-registry-hit.js"));
it("arg-symbol-registry-miss.js", createTestHandler("built-ins/Symbol/keyFor/arg-symbol-registry-miss.js"));
it("cross-realm.js", createTestHandler("built-ins/Symbol/keyFor/cross-realm.js"));
it("length.js", createTestHandler("built-ins/Symbol/keyFor/length.js"));
it("name.js", createTestHandler("built-ins/Symbol/keyFor/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Symbol/keyFor/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/keyFor/prop-desc.js"));
});
