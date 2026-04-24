import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isConcatSpreadable", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/isConcatSpreadable/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/isConcatSpreadable/prop-desc.js"));
});
